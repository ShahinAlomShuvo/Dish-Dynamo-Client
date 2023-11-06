import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className='font-Barlow'>
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

export default Root;
