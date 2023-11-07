import { Link } from "react-router-dom";
import SectionHeading from "../../Shared/SectionHeading";
import FoodCart from "./FoodCart";

const TopFood = ({ foods }) => {
  return (
    <div>
      <SectionHeading
        title={"Our Top Food"}
        desc={
          "Explore culinary excellence with Our Top Food. Indulge in exquisite dishes curated for your ultimate enjoyment."
        }
      ></SectionHeading>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-4 lg:mx-auto '>
        {foods.map((food) => (
          <FoodCart key={food._id} food={food}></FoodCart>
        ))}
      </div>
      <div className='flex justify-center py-10'>
        <Link
          to={"/allFoods"}
          className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
        >
          See All Food
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
