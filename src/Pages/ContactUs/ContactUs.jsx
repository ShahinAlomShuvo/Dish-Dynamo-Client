import { Helmet } from "react-helmet";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import bgImage from "../../assets/Images/contactBg.jpg";
import { FaMap, FaPhoneVolume } from "react-icons/fa6";
import animated1 from "../../assets/Images/animatedPlater1.png";
import animated2 from "../../assets/Images/animatedPlater2.png";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import Aos from "aos";
const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Helmet>
        <title> DishDynamo | Contact Us </title>
      </Helmet>
      <CommonBanner bgImage={bgImage} title={"Contact Us"}></CommonBanner>
      <div className='container mx-auto grid md:grid-cols-3 gap-5 py-20 border-b'>
        <div
          data-aos='zoom-in'
          className='flex flex-col items-center space-y-2 border-r-2 '
        >
          <FaPhoneVolume className='text-7xl text-[#E6C9A2] border-2 rounded-full bg-[#0E1927] p-4' />
          <h5 className='text-[#0e1927] font-medium text-xl uppercase'>
            Contact Us
          </h5>
          <p className='text-[#666666]'>+8801723-981861</p>
          <p className='text-[#666666]'>dishdynamo@gmail.com</p>
        </div>
        <div
          data-aos='zoom-in'
          className='flex flex-col items-center space-y-2 border-r-2'
        >
          <FaMap className='text-7xl text-[#E6C9A2] border-2 rounded-full bg-[#0E1927] p-4' />
          <h5 className='text-[#0e1927] font-medium text-xl uppercase'>
            ADDRESS HERE
          </h5>
          <p className='text-[#666666]'>Zero Point</p>
          <p className='text-[#666666]'>Shaheb Bazar, Rajshahi </p>
        </div>
        <div
          data-aos='zoom-in'
          className='flex flex-col items-center space-y-2 '
        >
          <FaPhoneVolume className='text-7xl text-[#E6C9A2] border-2 rounded-full bg-[#0E1927] p-4' />
          <h5 className='text-[#0e1927] font-medium text-xl uppercase'>
            Contact Us
          </h5>
          <p className='text-[#666666]'>Mon - Fri : 17.00 - 23.00 </p>
          <p className='text-[#666666]'>
            Saturday : 20.00 - 04.00 Sunday : close
          </p>
        </div>
      </div>
      <div className='text-center space-y-2 py-10 px-4 md:px-0'>
        <h2 className='text-[##0e1927] text-3xl md:text-4xl font-medium tracking-[2px]'>
          JUST DROP A LINE!
        </h2>
        <p className='text-[#666666] md:w-3/5 mx-auto'>
          Give us a call or drop by anytime, we endeavour to answer all
          enquiries within 24 hours on business days. We will be happy to answer
          your questions.
        </p>
      </div>
      <div className='py-10 container mx-auto grid lg:grid-cols-3 gap-6 place-items-center overflow-hidden'>
        <div className='animate-spin px-4 md:px-0'>
          <img src={animated1} alt='' />
        </div>
        <ContactForm></ContactForm>
        <div className='px-8 md:px-0'>
          <img className='animate-spin-reverse' src={animated2} alt='' />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
