import { Link } from "react-router-dom";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import bgImage from "../../assets/Images/feature2.webp";
import feature from "../../assets/Images/features.jpg";
import feature1 from "../../assets/Images/features1.webp";
import feature2 from "../../assets/Images/features3.webp";
import { useEffect } from "react";
import Aos from "aos";
import Counter from "../../Components/Counter/Counter";

const Features = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <CommonBanner bgImage={bgImage} title={"Our Feature"}></CommonBanner>
      <div className='grid md:grid-cols-2 gap-4 md:gap-0 container mx-auto py-20 place-items-center px-4 xl:px-0'>
        <div data-aos='fade-up' className='space-y-4 px-6  lg:px-28'>
          <p className='uppercase text-sm font-bold'>Feature</p>
          <h2 className='text-4xl lg:text-5xl text-[#0e1927] tracking-[2.7px] leading-[55px]'>
            {" "}
            Always fresh <br /> ingredients{" "}
          </h2>
          <p className='pb-4 text-[#666666]'>
            Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
            repudiandae dolorem, beatae dolorum, praesentium itaque et quam
            quaerat.
          </p>
          <Link to={"/allFoods"}>
            <button className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '>
              Get Started
            </button>
          </Link>
        </div>
        <img
          data-aos='zoom-in'
          className='rounded-l-2xl md:rounded-l-none rounded-r-2xl md:h-[500px] lg:h-[550px] w-full'
          src={feature1}
          alt=''
        />
        <img
          data-aos='zoom-in'
          className='rounded-r-2xl md:rounded-r-none rounded-l-2xl md:h-[500px] lg:h-[550px] w-full'
          src={feature}
          alt=''
        />

        <div data-aos='fade-up' className='space-y-4 px-6  lg:px-28'>
          <p className='uppercase text-sm font-bold'>Feature</p>
          <h2 className='text-4xl lg:text-5xl text-[#0e1927] tracking-[2.7px] leading-[55px]'>
            {" "}
            We invite you to visit our <br /> restaurant{" "}
          </h2>
          <p className='pb-4 text-[#666666]'>
            Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
            repudiandae dolorem, beatae dolorum, praesentium itaque et quam
            quaerat.
          </p>
          <Link to={"/about-us"}>
            <button className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '>
              View Details
            </button>
          </Link>
        </div>

        <div data-aos='fade-up' className='space-y-4 px-6  lg:px-28'>
          <p className='uppercase text-sm font-bold'>Feature</p>
          <h2 className='text-4xl lg:text-5xl text-[#0e1927] tracking-[2.7px] leading-[55px]'>
            {" "}
            Use the tips and recipes of <br /> our chefs{" "}
          </h2>
          <p className='pb-4 text-[#666666]'>
            Repudiandae dignissimos fugiat sit nam. Tempore aspernatur quae
            repudiandae dolorem, beatae dolorum, praesentium itaque et quam
            quaerat.
          </p>
          <Link to={"/allFoods"}>
            <button className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '>
              Order Now
            </button>
          </Link>
        </div>
        <img
          data-aos='zoom-in'
          className='rounded-l-2xl md:rounded-l-none rounded-r-2xl md:h-[500px] lg:h-[550px] w-full'
          src={feature2}
          alt=''
        />
      </div>
      <Counter></Counter>
    </>
  );
};

export default Features;
