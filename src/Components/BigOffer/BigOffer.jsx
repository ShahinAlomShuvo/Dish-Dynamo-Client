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
      <div className='grid md:grid-cols-2 gap-20'>
        <img className='animate-slide-right ' src={delivery} alt='' />
        <div className='text-white flex flex-col justify-center italic space-y-4'>
          <p className='text-5xl font-bold ml-5'>Big Offer</p>
          <p className='text-6xl font-bold ml-3'>Free Delivery</p>
          <p className='text-7xl font-bold'>Order! Order!</p>
        </div>
      </div>
    </div>
  );
};

export default BigOffer;
