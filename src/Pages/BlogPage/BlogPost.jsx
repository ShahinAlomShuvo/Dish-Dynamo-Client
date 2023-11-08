import Aos from "aos";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const BlogPost = () => {
  const blogData = useLoaderData();
  const { introduction, thumbnail, topics, title } = blogData;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos='fade-up' className='py-10 bg-white sm:py-16 lg:py-24'>
      <div className='max-w-5xl px-4 mx-auto sm:px-6 lg:px-8'>
        <div className='mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center'>
          <h2 className='text-3xl font-bold leading-tight text-black  lg:leading-tight'>
            <span className='relative inline-block'>
              <span className='absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5'></span>
              <span className='relative'> {title} </span>
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10'>
          <div>
            <img className='w-full h-72 mx-auto sm:max-w-xs' src={thumbnail} />
          </div>

          <div>
            <h3 className='text-lg font-semibold text-gray-900'>
              Introduction
            </h3>
            <p className='mt-4 text-lg text-gray-700'>{introduction}</p>
            <h3 className='text-lg font-semibold text-gray-900 mt-3'>
              {topics[0].title}
            </h3>
            <p className='mt-4 text-lg text-gray-700'>
              {topics[0].description}
            </p>
            <h3 className='text-lg font-semibold text-gray-900 mt-3'>
              {topics[1].title}
            </h3>
            <p className='mt-4 text-lg text-gray-700'>
              {topics[1].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
