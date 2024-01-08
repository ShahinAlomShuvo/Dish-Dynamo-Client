import { Link } from "react-router-dom";
import shape from "../../assets/Images/heading_shapes_1.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import footer1 from "../../assets/Images/footer-1.png";
import footer2 from "../../assets/Images/footer-2.png";

const Footer = () => {
  return (
    <footer className='py-10 bg-[#2d2723] sm:pt-16 lg:pt-24 relative'>
      <img className='absolute left-0 bottom-0' src={footer1} alt='' />
      <img className='absolute top-0 right-0' src={footer2} alt='' />
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='footer grid-cols-2  md:grid-cols-4 p-10 text-white rounded'>
          <aside>
            <h2 className='text-lg lg:text-3xl font-bold'>DishDynamo</h2>
            <p>
              DishDynamo Ltd.
              <br />
              Providing best food since 1992
            </p>
          </aside>
          <nav>
            <header className='footer-title opacity-100'>My Account</header>
            <a className='link link-hover'>Order History</a>
            <a className='link link-hover'>My Food</a>
            <a className='link link-hover'>Add Food</a>
            <a className='link link-hover'>My Add Food</a>
          </nav>
          <nav>
            <header className='footer-title opacity-100'>Company</header>
            <Link to={"/"} className='link link-hover'>
              Home
            </Link>
            <Link to={"/blog"} className='link link-hover'>
              Blog
            </Link>
            <a className='link link-hover'>Contact</a>
            <Link to={"/allFood"} className='link link-hover'>
              All Food
            </Link>
          </nav>
          <nav>
            <header className='footer-title opacity-100'>Legal</header>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </nav>
        </div>

        <hr className='mt-16 mb-10 border-white' />

        <div className='flex flex-wrap items-center justify-between'>
          <div className='flex flex-row-reverse gap-2'>
            <img className='h-8 auto w-12 md:order-1' src={shape} />
            <h2 className='text-white text-3xl'>DishDynamo</h2>
          </div>

          <ul className='flex items-center space-x-3 md:order-3'>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href='#'
                title=''
                className='flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600'
              >
                <FaInstagram />
              </a>
            </li>
          </ul>

          <p className='w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2'>
            © Copyright 2021, All Rights Reserved by DishDynamo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
