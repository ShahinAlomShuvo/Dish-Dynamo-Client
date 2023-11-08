import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className='flex justify-center items-center py-28'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }

  if (user && !loader) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
