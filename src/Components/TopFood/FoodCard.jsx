import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const {
    _id,
    foodName,
    foodCategory,
    foodImageUrl,
    price,
    quantity,
    orders,
    description,
  } = food;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div
        // data-aos='zoom-in'
        className='border-2 border-base-300 rounded-2xl p-6 hover:shadow-lg hover:border-transparent bg-white transition '
      >
        <div className='grid md:grid-cols-3  items-center gap-6'>
          <img
            src={foodImageUrl}
            className='rounded-full w-28 h-28 ring-4 ring-[#E6C9A2]'
            alt=''
          />
          <div className='space-y-3 col-span-2'>
            <div className='flex flex-wrap gap-2 justify-between'>
              <h2 className='text-[#0c0c0c] text-xl font-semibold'>
                {foodName}
              </h2>
              <p className='text-[#dc0505] font-medium'>$ {price}</p>
            </div>
            <p className='text-[#666666]'>{description}</p>
            <div className='flex flex-wrap gap-4 justify-between'>
              <p>Quantity:{quantity}</p>
              <p>Orders:{orders}</p>
              <Link
                to={`/foodDetails/${_id}`}
                className='btn bg-[#E6C9A2] text-[#5A4C3D] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-full transition duration-300 ease-in-out btn-sm'
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
