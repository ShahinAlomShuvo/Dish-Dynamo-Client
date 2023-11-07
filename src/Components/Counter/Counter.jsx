import { FaUser, FaUtensilSpoon, FaUsers, FaAward } from "react-icons/fa";

const Counter = () => {
  return (
    <div
      className='bg-cover bg-center relative '
      style={{
        backgroundImage: "url(https://i.ibb.co/4jnZ7M6/counter-bg.jpg)",
      }}
    >
      <div className='bg-black opacity-60 absolute inset-0'></div>
      <div className='relative z-10 p-6 flex flex-wrap gap-10 justify-evenly py-20 my-10'>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUser className='text-6xl p-4 bg-[#FF7C08] rounded-full' />
          <h2 className='text-3xl font-bold'>75,000+</h2>
          <p className='text-2xl font-bold'>Customer Service</p>
        </div>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUtensilSpoon className='text-6xl p-4 bg-[#FF7C08] rounded-full' />
          <h2 className='text-3xl font-bold'>100+</h2>
          <p className='text-2xl font-bold'>Experience Chef</p>
        </div>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaUsers className='text-6xl p-4 bg-[#FF7C08] rounded-full' />
          <h2 className='text-3xl font-bold'>50,000+</h2>
          <p className='text-2xl font-bold'>Happy Customer</p>
        </div>
        <div className='flex flex-col items-center space-y-5 text-white'>
          <FaAward className='text-6xl p-4 bg-[#FF7C08] rounded-full' />
          <h2 className='text-3xl font-bold'>20+</h2>
          <p className='text-2xl font-bold'>Winning Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
