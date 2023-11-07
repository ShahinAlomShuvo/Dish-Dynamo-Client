import { Link, NavLink } from "react-router-dom";
import avatar from "../../../assets/Images/avaar.png";
import logo from "../../../assets/Images/logo.png";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

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
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/allFoods"}>All Foods</NavLink>
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
          <Link to={"/"} className='flex items-center gap-2'>
            <img className='w-10 md:w-16 rounded-full' src={logo} alt='' />{" "}
            <h2 className=' text-[#252142] text-2xl md:text-3xl font-bold'>
              DishDynamo
            </h2>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end space-x-4'>
          {/* nav end content  */}
          <h3 className='text-lg text-[#45445A] font-semibold hidden md:block'>
            {user && user.displayName}
          </h3>

          <div className={`dropdown dropdown-end ${user ? "block" : "hidden"}`}>
            <div tabIndex={0} className='avatar hover:cursor-pointer'>
              <div className='w-9 md:w-11 rounded-full'>
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
                <Link to={"/addFood"}>Add Food</Link>
              </li>
              <li>
                <Link to={"/myOrder"}>My Order</Link>
              </li>
              <li>
                <Link to={"/myAddedFood"}>My Added Food</Link>
              </li>
            </ul>
          </div>
          <div>
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
                className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
