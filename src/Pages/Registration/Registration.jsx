import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { createUSer, googleLogIn, githubLogin, updateUserProfile } = useAuth();

  const navigate = useNavigate();

  const registrationHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    const user = { name, photoUrl, email };

    console.log(name, email, photoUrl, password);
    if (password.length < 6) {
      return toast.error("Password must be 6 Character");
    }

    if (!/^(?=.*[A-Z])(?=.*[^A-Za-z0-9])/.test(password)) {
      return toast.error("Password must have 1 Capital & 1 special Character");
    }

    // registration with email & password

    createUSer(email, password)
      .then((res) => {
        navigate("/");
        updateUserProfile(name, photoUrl);
        toast.success("Registration Successful");
        console.log(res.user);

        axios
          .post("https://dish-dynamo-server.vercel.app/users", user)
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.code);
      });
  };

  // registration with google
  const googleLogInHandler = () => {
    googleLogIn()
      .then((res) => {
        navigate("/");
        toast.success("Registration Successful");
        console.log(res.user);
        const user = {
          name: res.user.displayName,
          photoUrl: res.user.photoURL,
          email: res.user.email,
        };

        axios
          .post("https://dish-dynamo-server.vercel.app/users", user)
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  // registration with google
  const githubLoginHandler = () => {
    githubLogin()
      .then((res) => {
        navigate("/");
        toast.success("Registration Successful");
        console.log(res.user);

        const user = {
          name: res.user.displayName,
          photoUrl: res.user.photoURL,
          email: res.user.email,
        };

        axios
          .post("https://dish-dynamo-server.vercel.app/users", user)
          .then((res) => {
            console.log(res.data);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.code);
      });
  };

  return (
    <div>
      <Helmet>
        <title> DishDynamo | Registration </title>
      </Helmet>
      <div className='bg-white'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8'>
            <div className='absolute inset-0'>
              <img
                className='object-cover w-full h-full'
                src='https://wallpapercave.com/wp/wp3095003.jpg'
                alt=''
              />
            </div>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>

            <div className='relative'>
              <div className='w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl'>
                <h3 className='text-4xl font-bold text-white'>
                  Discover Culinary Delights
                  <br className='hidden xl:block' />
                  Join Our Foodie Community
                </h3>
                <ul className='grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4'>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
                      <svg
                        className='w-3.5 h-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      {" "}
                      Where Flavor Meets Adventure
                    </span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
                      <svg
                        className='w-3.5 h-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      {" "}
                      Savor the Taste of Tradition
                    </span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
                      <svg
                        className='w-3.5 h-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      Your Passport to Gastronomic Delights
                    </span>
                  </li>
                  <li className='flex items-center space-x-3'>
                    <div className='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full'>
                      <svg
                        className='w-3.5 h-3.5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </div>
                    <span className='text-lg font-medium text-white'>
                      A Journey of Tastes, One Bite at a Time
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center px-4 py-10 bg-[#0F1F33] lg:bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24'>
            <div className='xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto'>
              <h2 className='text-3xl font-bold leading-tight text-white lg:text-black sm:text-4xl'>
                Sign up to Celebration
              </h2>
              <p className='mt-2 text-base text-white  lg:text-gray-600'>
                Already have an account?{" "}
                <Link
                  to={"/logIn"}
                  title=''
                  className='font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline'
                >
                  Login
                </Link>
              </p>

              <form onSubmit={registrationHandler} className='mt-8'>
                <div className='space-y-5'>
                  <div>
                    <label
                      htmlFor='name'
                      className='text-base font-medium text-white  lg:text-gray-900'
                    >
                      {" "}
                      Fast & Last name{" "}
                    </label>
                    <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          className='w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                          />
                        </svg>
                      </div>

                      <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        placeholder='Enter your full name'
                        className='block w-full py-4 pl-10 pr-4 text-white  lg:text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='photoUrl'
                      className='text-base font-medium text-white  lg:text-gray-900'
                    >
                      {" "}
                      Photo Url
                    </label>
                    <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 icon'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                        >
                          <path
                            fillRule='evenodd'
                            d='M15.293 4.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L10 10.586V5a1 1 0 011-1h4a1 1 0 011 1v5.586l4.293-4.293z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </div>

                      <input
                        type='text'
                        name='photoUrl'
                        id='photoUrl'
                        required
                        placeholder='Enter your Photo Url'
                        className='block w-full py-4 pl-10 pr-4 text-white  lg:text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='text-base font-medium text-white  lg:text-gray-900'
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          className='w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                          />
                        </svg>
                      </div>

                      <input
                        type='email'
                        name='email'
                        id='email'
                        required
                        placeholder='Enter email to get started'
                        className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='text-base font-medium text-white  lg:text-gray-900'
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className='mt-2.5 relative text-gray-400 focus-within:text-gray-600'>
                      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg
                          className='w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
                          />
                        </svg>
                      </div>

                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter your password'
                        className='block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600'
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80'
                      type='submit'
                      value='Sign Up'
                    />
                  </div>
                </div>
              </form>

              <div className='mt-3 space-y-3'>
                <button
                  onClick={googleLogInHandler}
                  type='button'
                  className='relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none'
                >
                  <div className='absolute inset-y-0 left-0 p-4'>
                    <svg
                      className='w-6 h-6 text-rose-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z'></path>
                    </svg>
                  </div>
                  Sign up with Google
                </button>

                <button
                  onClick={githubLoginHandler}
                  type='button'
                  className='relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none'
                >
                  <div className='absolute inset-y-0 left-0 p-4'>
                    <svg
                      className='w-6 h-6 text-[#2563EB]'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12 2a10 10 0 00-3.162 19.488c.5.088.686-.217.686-.483 0-.24-.008-.875-.012-1.713-2.807.609-3.402-1.354-3.402-1.354-.46-1.166-1.123-1.475-1.123-1.475-.916-.626.069-.613.069-.613 1.012.071 1.543 1.038 1.543 1.038.897 1.537 2.354 1.093 2.93.833.091-.646.35-1.093.635-1.346-2.227-.253-4.568-1.113-4.568-4.958 0-1.098.393-1.996 1.04-2.69-.104-.254-.451-1.27.099-2.646 0 0 .84-.269 2.75 1.025a9.553 9.553 0 012.522-.338c.857.003 1.716.115 2.52.338 1.911-1.294 2.751-1.025 2.751-1.025.552 1.376.206 2.392.102 2.646.648.694 1.037 1.592 1.037 2.69 0 3.854-2.344 4.702-4.577 4.95.36.311.681.922.681 1.852 0 1.336-.012 2.414-.012 2.74 0 .267.184.576.692.482A10 10 0 0012 2z'
                      />
                    </svg>
                  </div>
                  Sign up with Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
