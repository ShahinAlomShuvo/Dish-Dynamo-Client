import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FoodCart = ({ food }) => {
  const {
    _id,
    foodName,
    foodCategory,
    foodImageUrl,
    price,
    quantity,
    orders,
  } = food;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div
        data-aos='zoom-in'
        className='relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border'
      >
        <div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border'>
          <img
            src={foodImageUrl}
            className='object-cover w-full h-full'
            alt='Product Image'
          />
        </div>
        <div className='p-6'>
          <div className='flex items-center justify-between mb-2'>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
              {foodName}
            </p>
            <p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
              ${price}
            </p>
          </div>
          <p className='block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75'>
            {foodCategory}
          </p>
          <p className='block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75'>
            Available: {quantity}
          </p>

          <p className='block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75'>
            Orders: {orders}
          </p>

          <div className='pt-4'>
            <Link
              to={`/foodDetails/${_id}`}
              className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out btn-block'
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
