import menu from "../../assets/Images/menu.jpg";
import food from "../../assets/Images/eggFood.jpg";
import SectionHeading from "../../Shared/SectionHeading";
const OurService = () => {
  return (
    <>
      <SectionHeading
        title={"Our Service"}
        desc={
          "At DishDynamo, we offer catering, takeout, private dining, cooking classes, and wine pairing. Enhance your dining experience with our diverse services."
        }
      ></SectionHeading>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 px-4 container lg:mx-auto pb-10'>
        <div className='bg-gray-600 text-white flex flex-col justify-center items-center space-y-3 py-6'>
          <h2 className='text-2xl font-bold'>FIND US HERE</h2>
          <p>Shaheb Bazar, Rajshahi (BD)</p>
          <p>+8801723-981861</p>
          <p>dishdynamo@gmail.com</p>
        </div>
        <div className='row-span-2'>
          <img className='h-full' src={menu} />
        </div>
        <div className='row-span-2'>
          <img className='h-full' src={food} />
        </div>
        <div className='bg-gray-600 space-y-2  flex flex-col justify-center  text-white py-6'>
          <h2 className='text-center text-2xl font-bold pb-6'>OPENING TIMES</h2>
          <div className='flex justify-around   '>
            <p>MON</p>
            <p>17:00 to 23:00</p>
          </div>
          <div className='flex justify-around   '>
            <p>WED</p>
            <p>19:00 to 24:00</p>
          </div>
          <div className='flex justify-around   '>
            <p>THU</p>
            <p>14:00 to 18:00</p>
          </div>
          <div className='flex justify-around   '>
            <p>FRI</p>
            <p>16:00 to 24:00</p>
          </div>
          <div className='flex justify-around   '>
            <p>SAT</p>
            <p>20:00 to 4:00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurService;
