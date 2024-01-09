import Aos from "aos";
import { useEffect } from "react";
import newsLetter from "../../assets/Images/feature2.webp";

const NewsLetter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className='relative bg-cover bg-center mb-10'
      style={{
        backgroundImage: `url(${newsLetter})`,
      }}
    >
      <div className=' text-white bg-black bg-opacity-70 py-40'>
        <div data-aos='zoom-in' className='relative px-4 md:px-0'>
          <h2 className='text-4xl md:text-6xl font-medium text-center uppercase tracking-[2.7px] pb-4 '>
            Subscribe our newsletter
          </h2>
          <span className='absolute w-36 border-4 border-[#E6C9A2] rounded mt-2 left-1/2 transform -translate-x-1/2'></span>

          <p className='text-center py-10'>
            Join our newsletter for the latest on promotions, new dishes, and
            exciting events at DishDynamo.
          </p>
          <div className='flex justify-center w-full'>
            <form className='flex items-center gap-4'>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-64 md:w-96  text-[#0e1927]'
              />
              <button
                type='submit'
                className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:text-[#E6C9A2] hover:bg-transparent  capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
