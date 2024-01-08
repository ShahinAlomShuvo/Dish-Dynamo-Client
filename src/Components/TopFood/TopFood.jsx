import { Link } from "react-router-dom";
import SectionHeading from "../../Shared/SectionHeading";
import FoodCard from "./FoodCard";

const TopFood = ({ foods }) => {
  return (
    <div className='bg-base-200'>
      <SectionHeading
        title={"Our Top Food"}
        desc={
          "Explore culinary excellence with Our Top Food. Indulge in exquisite dishes curated for your ultimate enjoyment."
        }
      ></SectionHeading>

      <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-10 container mx-4 lg:mx-auto'>
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className='flex justify-center py-10'>
        <Link
          to={"/allFoods"}
          className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
        >
          See All Food
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
