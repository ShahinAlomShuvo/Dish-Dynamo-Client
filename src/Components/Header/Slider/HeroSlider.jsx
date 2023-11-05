import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import sliderOne from "../../../assets/Images/sliderThree.jpg";
import sliderThree from "../../../assets/Images/SliderOne.jpg";
import sliderTwo from "../../../assets/Images/SliderTwo.jpg";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className='relative'>
      <div className='carousel w-full '>
        <div id='slide1' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] '
            style={{
              backgroundImage: `url(${sliderOne})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div
              className='hero-content text-center text-neutral-content'
              data-aos='fade-up'
            >
              <div className='max-w-xl'>
                <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
                  A Symphony of Flavors
                </h1>
                <p className='text-gray-400 font-semibold text-lg pb-3'>
                  Discover a culinary journey where every bite is a harmonious
                  blend of taste and pleasure.
                </p>

                <Link
                  to={"/contact"}
                  className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] '
            style={{
              backgroundImage: `url(${sliderTwo})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div
              className='hero-content text-center text-neutral-content'
              data-aos='fade-up'
            >
              <div className='max-w-xl'>
                <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
                  Bite into Burger Paradise
                </h1>
                <p className='text-gray-400 font-semibold text-lg pb-3'>
                  Every bite of our burgers is a journey through savory layers,
                  bringing you closer to burger perfection in every mouthful.
                </p>

                <Link
                  to={"/contact"}
                  className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <div
            className='hero h-[70vh] '
            style={{
              backgroundImage: `url(${sliderThree})`,
            }}
          >
            <div className='hero-overlay bg-opacity-60'></div>
            <div
              className='hero-content text-center text-neutral-content'
              data-aos='fade-up'
            >
              <div className='max-w-xl'>
                <h1 className='mb-5 text-3xl md:text-5xl font-bold'>
                  Indulge in Flavorful Escapades
                </h1>
                <p className='text-gray-400 font-semibold text-lg pb-3'>
                  Surrender to the temptation of our tantalizing creations,
                  where every bite is a celebration.
                </p>

                <Link
                  to={"/contact"}
                  className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>

          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2 absolute bottom-3'>
        <a
          href='#slide1'
          className='btn btn-outline btn-circle btn-xs   bg-transparent hover:bg-[#FF7C08] hover:border-white text-white hover:text-white'
        >
          1
        </a>
        <a
          href='#slide2'
          className='btn btn-outline btn-circle btn-xs   bg-transparent hover:bg-[#FF7C08] hover:border-white text-white hover:text-white'
        >
          2
        </a>

        <a
          href='#slide3'
          className='btn btn-outline btn-circle btn-xs   bg-transparent hover:bg-[#FF7C08] hover:border-white text-white hover:text-white'
        >
          3
        </a>
      </div>
    </div>
  );
};

export default HeroSlider;
