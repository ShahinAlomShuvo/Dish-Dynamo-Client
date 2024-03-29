import { useLoaderData } from "react-router-dom";
import FoodCard from "../../Components/TopFood/FoodCard";
import { useEffect, useState } from "react";
import axios from "axios";
import FilteringFood from "./FilteringFood";
import { Helmet } from "react-helmet";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import bgImage from "../../assets/Images/commonBanner1.jpg";

import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const AllFoods = () => {
  const { count } = useLoaderData();
  const [searchFood, setSearchFood] = useState([]);
  const [allFoods, setAllFoods] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [getCurrentPage, setGetCurrentPage] = useState(0);
  const [activePage, setActivePage] = useState(0);

  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];
  useEffect(() => {
    axios
      .get(
        `https://dish-dynamo-server.vercel.app/allFoods?page=${getCurrentPage}&size=${itemsPerPage}`
      )
      .then((res) => {
        setAllFoods(res.data);
      });
  }, [getCurrentPage, itemsPerPage]);

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setGetCurrentPage(0);
  };

  const handlePrevBtn = () => {
    if (getCurrentPage > 0) {
      setGetCurrentPage(getCurrentPage - 1);
      setActivePage(activePage - 1);
    }
  };

  const handleNextBtn = () => {
    if (getCurrentPage < pages.length - 1) {
      setGetCurrentPage(getCurrentPage + 1);
      setActivePage(activePage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title> DishDynamo | AllFoods </title>
      </Helmet>
      <CommonBanner bgImage={bgImage} title={"All Foods"}></CommonBanner>
      {/* filtering functionality  */}

      <FilteringFood setSearchFood={setSearchFood}></FilteringFood>

      {/* card  */}
      <div className='grid md:grid-cols-2 gap-4 px-4 xl:px-0 container mx-auto'>
        {searchFood.length > 0
          ? searchFood.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))
          : allFoods?.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
      </div>
      {/* pagination btn  */}
      <div className='flex flex-row justify-center py-6 gap-2 md:gap-3'>
        <button
          className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
          onClick={handlePrevBtn}
        >
          Prev
        </button>
        {pages.map((page, index) => (
          <button
            className={`btn ${
              activePage === index
                ? "btn-outline border border-[#E6C9A2]"
                : "bg-[#E6C9A2] text-[#0e1927]"
            } border border-transparent hover:border-[#E6C9A2] hover:bg-transparent hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out `}
            onClick={() => {
              setGetCurrentPage(page);
              setActivePage(index); // Update the active page index when clicked.
            }}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
          onClick={handleNextBtn}
        >
          Next
        </button>

        <select
          className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-[#5A4C3D] hover:text-[#E6C9A2] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
          name=''
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          id=''
        >
          <option value='6'>6</option>
          <option value='9'>9</option>
          <option value='18'>18</option>
          <option value='27'>27</option>
        </select>
      </div>

      <NewsLetter></NewsLetter>
    </>
  );
};

export default AllFoods;
