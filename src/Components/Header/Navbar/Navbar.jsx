import { Link, NavLink } from "react-router-dom";
import avatar from "../../../assets/Images/avatar.png";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, signOutUser } = useAuth();

  const logOut = () => {
    signOutUser()
      .then(() => toast.success("Log Out Successful"))
      .catch((error) => {
        console.log(error.message);
        return toast.error(error.code);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/store"}>Store</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className='bg-base-200'>
      <nav className='navbar container mx-auto '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className=' text-[#45445A] text-2xl font-bold'>
            Yoga <span className='text-[#CEDB1F]'>Fusion</span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end space-x-4'>
          {/* nav end content for medium and large screen  */}
          <h3 className='text-lg text-[#45445A] font-semibold hidden md:block'>
            {user && user.displayName}
          </h3>
          <div className='avatar hidden md:block'>
            <div className='w-11 rounded-full'>
              <img
                src={user && user.photoURL ? user.photoURL : avatar}
                alt='User Avatar'
              />
            </div>
          </div>
          <div className='hidden md:block'>
            {user ? (
              <button
                onClick={logOut}
                className='btn bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
              >
                Log Out
              </button>
            ) : (
              <Link
                to={"/login"}
                className='btn bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
              >
                Login
              </Link>
            )}
          </div>
          {/* nav end for small screen  */}
          <div className='dropdown dropdown-end md:hidden'>
            <div tabIndex={0} className='avatar hover:cursor-pointer'>
              <div className='w-11 rounded-full'>
                <img
                  src={user && user.photoURL ? user.photoURL : avatar}
                  alt='User Avatar'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 '
            >
              <li>
                <h3 className='text-lg text-[#45445A] font-semibold'>
                  {user && user.displayName}
                </h3>
              </li>
              <li>
                {user ? (
                  <button
                    onClick={logOut}
                    className=' bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent capitalize py-2 mt-2 w-full rounded-md transition duration-300 ease-in-out '
                  >
                    <span className='ml-12 font-bold'>Log Out</span>
                  </button>
                ) : (
                  <Link
                    to={"/login"}
                    className='bg-[#C4D114] text-gray-600 border border-transparent hover:border-[#C4D114] hover:bg-transparent capitalize py-2 mt-2 w-full rounded-md transition duration-300 ease-in-out '
                  >
                    <span className='ml-12 font-bold'>Login</span>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
