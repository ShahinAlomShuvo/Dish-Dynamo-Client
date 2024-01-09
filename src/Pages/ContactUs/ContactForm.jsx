import Aos from "aos";
import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='  px-6 py-7  md:py-0  w-full  z-10'>
      <form className='space-y-3'>
        {/* name  */}
        <label data-aos='fade-up' className='form-control w-full '>
          <div className='label'>
            <span className='label-text  text-base font-semibold'>Name</span>
          </div>
          <input
            type='text'
            placeholder='Enter your name....'
            className='input input-bordered  w-full   border-gray-500 '
          />
        </label>
        {/* email  */}
        <label data-aos='fade-up' className='form-control w-full '>
          <div className='label'>
            <span className='label-text  text-base font-semibold'>Email</span>
          </div>
          <input
            type='email'
            placeholder='Enter your email....'
            className='input input-bordered  w-full   border-gray-500 '
          />
        </label>
        {/* subject  */}
        <label data-aos='fade-up' className='form-control w-full '>
          <div className='label'>
            <span className='label-text  text-base font-semibold'>Subject</span>
          </div>
          <input
            type='text'
            placeholder='Enter your subject....'
            className='input input-bordered  w-full   border-gray-500 '
          />
        </label>
        {/* message  */}
        <label data-aos='fade-up' className='form-control w-full '>
          <div className='label'>
            <span className='label-text  text-base font-semibold'>Message</span>
          </div>

          <textarea
            rows={4}
            className='textarea border-gray-500 '
            placeholder='Enter your message....'
          ></textarea>
        </label>
        <div data-aos='fade-up' className='flex justify-center'>
          <button className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out btn-block'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
