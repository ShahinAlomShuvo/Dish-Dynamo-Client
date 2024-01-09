import { useEffect } from "react";
import about from "../../assets/Images/about.jpg";
import iconBg from "../../assets/Images/icon-bg.png";
import iconBg2 from "../../assets/Images/icon-bg2.png";

import { FaCircleCheck } from "react-icons/fa6";
import Aos from "aos";

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos='fade-up' className='bg-[#FFF4EA] relative overflow-hidden'>
      <img className='absolute -top-10 -right-10 z-1' src={iconBg} alt='' />
      <div className='grid px-8 lg:px-4 xl:px-0 lg:grid-cols-2 gap-10 container mx-auto my-20 py-10 pb-40 xl:pb-0'>
        <img data-aos='zoom-in' className='z-10' src={about} alt='' />
        <div className='xl:pt-16 space-y-6 z-10'>
          <h2 className='text-5xl font-semibold text-[#0c0c0c] tracking-wide leading-tight'>
            There is a Whole <br /> Universe in Every Bite.
          </h2>
          <p className='text-[#666666] leading-6'>
            We are lucky to live in a glorious age that gives us everything we
            could ask for as a human race. What more could you need when you
            have meat covered in cheese nestled between bread. rom smashed
            patties at Shake Shack to Glamburgers at Honky Tonk, there’s a
            little something for everyone. Some burgers are humble.
          </p>
          <ul className='grid grid-cols-2 gap-4 lg:gap-6'>
            <li className='flex gap-2 items-center text-sm lg:text-[17px]'>
              <FaCircleCheck className='text-red-900' />
              <span className='text-[#666666] font-medium '>
                RECEIVE PARTY BOOKING
              </span>
            </li>
            <li className='flex gap-2 items-center text-sm lg:text-[17px]'>
              <FaCircleCheck className='text-red-900' />
              <span className='text-[#666666] font-medium '>
                ACTIVITIES FOR KIDS
              </span>
            </li>
            <li className='flex gap-2 items-center text-sm lg:text-[17px]'>
              <FaCircleCheck className='text-red-900' />
              <span className='text-[#666666] font-medium '>
                100% LOCAL INGREDIENTS
              </span>
            </li>
            <li className='flex gap-2 items-center text-sm lg:text-[17px]'>
              <FaCircleCheck className='text-red-900' />
              <span className='text-[#666666] font-medium '>
                CLUB CONNECT MEMBERS
              </span>
            </li>
          </ul>
          <button className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent  capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '>
            Reed More About Us
          </button>
        </div>
      </div>
      <img
        className='absolute right-8 bottom-8 animate-slide-right
        '
        src={iconBg2}
        alt=''
      />
    </div>
  );
};

export default AboutSection;
