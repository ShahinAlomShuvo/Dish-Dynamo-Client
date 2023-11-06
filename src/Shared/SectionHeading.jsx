import headingShape from "../assets/Images/heading_shapes_1.png";
const SectionHeading = ({ title, desc }) => {
  return (
    <div className='flex flex-col items-center text-center space-y-2 pt-20 pb-10'>
      <h2 className='text-4xl text-[#231f40] font-bold'>{title}</h2>
      <p className='w-1/3 mx-auto text-gray-600'>{desc}</p>
      <img src={headingShape} />
    </div>
  );
};

export default SectionHeading;
