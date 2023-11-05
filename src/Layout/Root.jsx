import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className='font-Barlow'>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
