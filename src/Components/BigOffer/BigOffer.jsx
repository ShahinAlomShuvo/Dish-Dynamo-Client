import offerBg2 from "../../assets/Images/offerBg2.jpg";
import delivery from "../../assets/Images/delivery.png";

const BigOffer = () => {
  return (
    <div
      className='bg-cover bg-center relative my-10'
      style={{
        backgroundImage: `url(${offerBg2})`,
      }}
    >
      <div className='grid md:grid-cols-2 gap-20 overflow-hidden'>
        <img className='animate-slide-right ' src={delivery} alt='' />
        <div className='text-white md:flex flex-col justify-center  italic space-y-4 hidden'>
          <p className=' text-3xl lg:text-5xl font-bold ml-5'>Big Offer</p>
          <p className=' text-4xl lg:text-6xl font-bold ml-3'>Free Delivery</p>
          <p className=' text-5xl lg:text-7xl font-bold'>Order! Order!</p>
        </div>
      </div>
    </div>
  );
};

export default BigOffer;
