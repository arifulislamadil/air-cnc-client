import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/NavBar/Navbar";
import Footer from "../components/Shared/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-28 pb-20">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
