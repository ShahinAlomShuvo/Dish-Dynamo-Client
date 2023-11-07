import Lottie from "lottie-react";
import animation from "../../assets/error.json";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className='flex flex-col justify-center items-center h-screen'
      id='error-page'
    >
      <div className='w-96'>
        <Lottie animationData={animation}></Lottie>
      </div>
      <div className='text-center text-2xl space-y-2'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link
          to={"/"}
          className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
