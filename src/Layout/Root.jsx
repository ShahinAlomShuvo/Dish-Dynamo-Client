import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const Root = () => {
  return (
    <div className='font-Barlow'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Root;
