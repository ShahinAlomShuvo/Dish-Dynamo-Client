import axios from "axios";

const FilteringFood = ({ setSearchFood }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.searchValue.value;
    console.log(searchValue);

    axios
      .get("http://localhost:5000/allFoods", {
        params: { searchValue },
      })
      .then((res) => {
        setSearchFood(res.data);
      });
  };

  return (
    <div className='px-6 container mx-auto py-10'>
      <form onSubmit={handleSearch}>
        <label
          htmlFor='default-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-[#5A4C3D] dark:text-[#5A4C3D]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='search'
            name='searchValue'
            id='default-search'
            className='block w-full p-4 pl-10 text-sm text-[#E6C9A2] border border-[#E6C9A2] rounded-lg bg-gray-50 focus:ring-[#E6C9A2] focus:border-[#E6C9A2] dark:bg-white dark:border-[#E6C9A2] dark:placeholder-[#E6C9A2] dark:text-[#E6C9A2] dark:focus:ring-[#E6C9A2] dark:focus:border-[#E6C9A2]'
            placeholder='Search Foods By Name'
            required
          />
          <button
            type='submit'
            className='text-[#0e1927] absolute right-2.5 bottom-2.5 bg-[#E6C9A2] hover:bg-[#E6C9A2] focus:ring-4 focus:outline-none focus:ring-[#E6C9A2] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#E6C9A2] dark:hover:bg-[#E6C9A2] dark:focus:ring-[#E6C9A2]'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilteringFood;
