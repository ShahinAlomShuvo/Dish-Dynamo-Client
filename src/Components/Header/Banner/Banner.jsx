import { useEffect } from "react";
import bgImage from "../../../assets/Images/banner.jpg";
import Aos from "aos";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const overlayStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div className='h-screen flex items-center relative' style={overlayStyle}>
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <div className='container mx-auto text-white relative  px-4  xl:px-0 pt-16 md:pt-0'>
        <h2
          data-aos='fade-up'
          className='text-4xl md:text-6xl font-medium mb-4 uppercase tracking-[2.7px] leading-tight'
        >
          It’s time to enjoy <br />
          the finer things in life.
        </h2>
        <p data-aos='fade-up' className='text-lg font-normal'>
          Discover a culinary journey where every bite is a harmonious blend of
          taste and pleasure.
        </p>
      </div>
    </div>
  );
};

export default Banner;
