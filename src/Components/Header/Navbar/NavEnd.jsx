import { Link } from "react-router-dom";

const NavEnd = ({ user, logOut, role }) => {
  return (
    <>
      <div>
        {
          <div className={`drawer drawer-end  ${user ? "block" : "hidden"}`}>
            <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content'>
              <label
                htmlFor='my-drawer-4'
                className='avatar hover:cursor-pointer'
              >
                <div className='w-9 md:w-11 rounded-full'>
                  <img
                    id='user-avatar'
                    src={user && user.photoURL}
                    alt='User Avatar'
                  />
                </div>
              </label>
            </div>

            <div className='drawer-side'>
              <label
                htmlFor='my-drawer-4'
                aria-label='close sidebar'
                className='drawer-overlay'
              ></label>
              <div className='menu p-4 w-80 min-h-full bg-[#001E2B] text-base-content space-y-4 z-10'>
                <div className='text-white flex items-center gap-4'>
                  <label className='avatar '>
                    <div className='w-9 md:w-11 rounded-full'>
                      <img
                        id='user-avatar'
                        src={user && user.photoURL}
                        alt='User Avatar'
                      />
                    </div>
                  </label>
                  <h2>{user && user.displayName}</h2>
                </div>

                <Link
                  to={"/add-food"}
                  className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Add Food{" "}
                </Link>
                <Link
                  to={"/my-order"}
                  className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  My Order
                </Link>
                <Link
                  to={"/my-added-food"}
                  className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  My Added Food
                </Link>

                <button
                  onClick={logOut}
                  className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        }

        <div>
          {user ? null : (
            <Link
              to={"/login"}
              className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavEnd;
