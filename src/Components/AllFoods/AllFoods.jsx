import { useLoaderData } from "react-router-dom";
import FoodCart from "../TopFood/FoodCart";
import { useEffect, useState } from "react";
import axios from "axios";

const AllFoods = () => {
  const { count } = useLoaderData();

  const [allFoods, setAllFoods] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [getCurrentPage, setGetCurrentPage] = useState(0);

  const numberOfPage = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPage).keys()];

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/allFoods?page=${getCurrentPage}&size=${itemsPerPage}`
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
    }
  };

  const handleNextBtn = () => {
    if (getCurrentPage < pages.length - 1) {
      setGetCurrentPage(getCurrentPage + 1);
    }
  };

  return (
    <>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
        {allFoods?.map((food) => (
          <FoodCart key={food._id} food={food}></FoodCart>
        ))}
      </div>
      <div className='flex flex-row justify-center py-6 gap-3'>
        <button
          className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
          onClick={handlePrevBtn}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
            onClick={() => setGetCurrentPage(page)}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
          onClick={handleNextBtn}
        >
          Next
        </button>

        <select
          className='btn bg-[#FF7C08] text-white border border-transparent hover:border-[#FF7C08] hover:bg-transparent hover:text-[#FF7C08] capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
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
    </>
  );
};

export default AllFoods;
