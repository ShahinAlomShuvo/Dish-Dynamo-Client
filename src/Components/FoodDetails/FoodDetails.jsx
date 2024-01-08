import Aos from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, Link } from "react-router-dom";
import CommonBanner from "../CommonBanner/CommonBanner";
import detailsBg from "../../assets/Images/detailsBg.jpg";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    _id,
    foodImageUrl,
    foodName,
    foodOrigin,
    price,
    description,
    foodCategory,
    userName,
  } = food;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title> DishDynamo | Details </title>
      </Helmet>
      <CommonBanner
        bgImage={detailsBg}
        title={"Food Description"}
      ></CommonBanner>
      {/* <div
        className='flex justify-center my-10'
        style={{
          backgroundImage: `url(${foodImageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          data-aos='zoom-in'
          className='max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'
        >
          <img className='object-cover w-full h-64' src={foodImageUrl} />

          <div className='p-6'>
            <div>
              <span className='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>
                Origin: {foodOrigin}
              </span>
              <h2
                className='block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline'
                tabIndex='0'
                role='link'
              >
                {foodName}
              </h2>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                {description}
              </p>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Category: {foodCategory}
              </p>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Add by: {userName}
              </p>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                Price: ${price}
              </p>
            </div>
            <Link
              to={`/orderingFood/${_id}`}
              className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out btn-block mt-2'
            >
              Order Now
            </Link>
          </div>
        </div>
      </div> */}
      <div className='bg-[#FEF7EA]'>
        <div className='grid lg:grid-cols-2 gap-10 container mx-auto py-20 items-center px-4'>
          <img
            data-aos='zoom-in'
            className='rounded-3xl'
            src={foodImageUrl}
            alt=''
          />
          <div className='space-y-2 xl:space-y-4'>
            <p className='bg-gradient-to-r from-purple-700 to-purple-400 rounded-xl px-3 py-1 w-16 text-center'>
              Sale!
            </p>
            <h2 className='text-2xl xl:text-3xl text-[#0c0c0c] font-semibold'>
              {foodName}
            </h2>
            <p className='text-[#dc0505] text-xl'>Price: ${price}</p>
            <hr />
            <p className='text-2xl text-[#0c0c0c] font-semibold'>
              Description:{" "}
            </p>
            <p className='text-[#666666] text-base font-normal'>
              {description}
            </p>
            <hr />
            <p className='text-2xl text-[#0c0c0c] font-semibold'>
              Additional Info:
            </p>
            <div className='flex flex-wrap justify-between gap-4'>
              <p className='text-[#dc0505]'>
                {" "}
                <span className='text-[#0c0c0c] mr-2'>Food Category :</span>
                {foodCategory}
              </p>
              <p className='text-[#dc0505]'>
                {" "}
                <span className='text-[#0c0c0c] mr-2'>Food Origin :</span>
                {foodOrigin}
              </p>
              <p className='text-[#dc0505]'>
                {" "}
                <span className='text-[#0c0c0c] mr-2'>Add By :</span>
                {userName}
              </p>
            </div>
            <hr />
            <p className='text-2xl text-[#0c0c0c] font-semibold'>
              Choose Your Options:
            </p>
            <Link
              to={`/orderingFood/${_id}`}
              className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent  capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out btn-block'
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
