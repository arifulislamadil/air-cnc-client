import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { getRooms } from "../../api/rooms";
import RoomDataRow from "./RoomDataRow";
import EmptyState from "../Shared/EmptyState";

const MyListings = () => {

  const {user} = useContext(AuthContext);
  const [rooms, setRooms] = useState([])
  const fetchRooms =()=> getRooms(user?.email).then(data => setRooms(data))


  useEffect(()=>{
    fetchRooms()
  }
  ,[user])
    return (
      <>
      { rooms && Array.isArray(rooms) && rooms.length > 0 ? <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      From
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      To
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rooms && 
                  rooms.map((room, index) =>(
                      <RoomDataRow
                      key={room?._id}
                      room={room}
                      fetchRooms={fetchRooms}
                      />
                    ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>: <EmptyState message = {"No Room Data available"} address={"/dashboard/add-room"} label={'Add Room'}/>}</>
    )
  }
  
  export default MyListings