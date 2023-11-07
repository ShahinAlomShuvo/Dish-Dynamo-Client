import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    foodImageUrl,
    foodName,
    foodOrigin,
    price,
    description,
    foodCategory,
    userName,
  } = food;
  console.log(food);
  return (
    <div
      className='flex justify-center'
      style={{
        backgroundImage: `url(${foodImageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'>
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
          <button className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out btn-block mt-2'>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
