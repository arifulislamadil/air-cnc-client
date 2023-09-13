// Add room to the database
export const addRoom = async roomData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(roomData),
  });

  const data = await response.json();
  return data
};


// Get all rooms from the database
export const getAllRoom = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data = await response.json();
    return data
}
// Get filtered from the database
export const getRooms = async (email) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`)
    const data = await response.json();
    return data
}
// Get single room from the database
export const getRoom = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data = await response.json();
    return data
}


// Delete a booking 
export const deleteRoom = async id =>{
  const response = await fetch (
      `${import.meta.env.VITE_API_URL}/rooms/${id}`,{
          method: "DELETE",
          headers:{
              "content-type": "application/json",
          }
      }
  )

  const result = await response.json()
  return result
}
