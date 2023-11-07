const NewsLetter = () => {
  return (
    <div
      className='relative bg-cover bg-center mb-10'
      style={{
        backgroundImage: "url(https://i.ibb.co/DKTPCGS/newsletter.jpg)",
      }}
    >
      <div className='grid md:grid-cols-3 gap-5  px-10 text-white bg-black bg-opacity-60 py-16'>
        <h2 className='text-2xl font-bold'>NEWSLETTER</h2>
        <p className='md:hidden lg:block font-medium'>
          Join our newsletter for the latest on promotions, new dishes, and
          exciting events at DishDynamo.
        </p>

        <div className='md:col-span-2 lg:col-span-1'>
          <form className='flex items-center'>
            <div className='relative w-full'>
              <input
                type='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='email'
                required
              />
            </div>
            <button
              type='submit'
              className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#FF7C08] rounded-lg border border-[#FF7C08] hover:bg-[#FF7C08] focus:ring-4 focus:outline-none focus:ring-[#FF7C08] dark:bg-[#FF7C08] dark:hover:bg-[#FF7C08] dark:focus:ring-[#FF7C08]'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
