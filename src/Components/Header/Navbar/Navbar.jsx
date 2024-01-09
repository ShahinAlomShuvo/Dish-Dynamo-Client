import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import NavEnd from "./NavEnd";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setIsScrolled(position > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBackgroundClass = isScrolled ? "" : "bg-opacity-60 ";

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
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C9A2] border-b-2 border-transparent pb-2 transition-colors duration-300"
              : "text-white border-b-2 border-transparent pb-2 transition-colors duration-300 hover:text-[#E6C9A2] hover:border-[#E6C9A2]"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/allFoods"}
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C9A2] border-b-2 border-transparent pb-2 transition-colors duration-300"
              : "text-white border-b-2 border-transparent pb-2 transition-colors duration-300 hover:text-[#E6C9A2] hover:border-[#E6C9A2]"
          }
        >
          All Foods
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about-us"}
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C9A2] border-b-2 border-transparent pb-2 transition-colors duration-300"
              : "text-white border-b-2 border-transparent pb-2 transition-colors duration-300 hover:text-[#E6C9A2] hover:border-[#E6C9A2]"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/features"}
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C9A2] border-b-2 border-transparent pb-2 transition-colors duration-300"
              : "text-white border-b-2 border-transparent pb-2 transition-colors duration-300 hover:text-[#E6C9A2] hover:border-[#E6C9A2]"
          }
        >
          Features
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact-us"}
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C9A2] border-b-2 border-transparent pb-2 transition-colors duration-300"
              : "text-white border-b-2 border-transparent pb-2 transition-colors duration-300 hover:text-[#E6C9A2] hover:border-[#E6C9A2]"
          }
        >
          Contact Us
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to={"/blog"}
          className={({ isActive }) =>
            isActive
              ? "text-[#E6C9A2] border-b-2 border-transparent pb-2 transition-colors duration-300"
              : "text-white border-b-2 border-transparent pb-2 transition-colors duration-300 hover:text-[#E6C9A2] hover:border-[#E6C9A2]"
          }
        >
          Blog
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div
      className={`fixed w-full z-50 bg-[#0E1927] ${navBackgroundClass} transition-opacity duration-200`}
    >
      <nav className='navbar container mx-auto text-white lg:px-4 xl:px-0'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div className='drawer'>
              <input id='my-drawer' type='checkbox' className='drawer-toggle' />
              <div className='drawer-content'>
                <label
                  htmlFor='my-drawer'
                  tabIndex={0}
                  className='btn btn-ghost lg:hidden'
                >
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
              </div>

              <div className='drawer-side z-50'>
                <label
                  htmlFor='my-drawer'
                  aria-label='close sidebar'
                  className='drawer-overlay'
                ></label>
                <ul className=' space-y-4 p-4 w-80 min-h-full bg-[#001E2B] '>
                  {navLinks}
                </ul>
              </div>
            </div>
          </div>
          <Link to={"/"}>
            <h2 className=' text-[#E6C9A2] text-2xl md:text-3xl font-bold'>
              DishDynamo
            </h2>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='space-x-4 menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end space-x-4'>
          {/* nav end content  */}
          <NavEnd user={user} logOut={logOut}></NavEnd>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
