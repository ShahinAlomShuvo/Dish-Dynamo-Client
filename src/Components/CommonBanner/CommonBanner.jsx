const CommonBanner = ({ bgImage, title }) => {
  const overlayStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div className='h-[70vh] flex items-center relative' style={overlayStyle}>
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <div className='container mx-auto text-white relative px-4 xl:px-0'>
        <div className='relative '>
          <h2 className='text-4xl md:text-6xl font-medium text-center uppercase tracking-[2.7px] pb-4 '>
            {title}
          </h2>
          <span className='absolute w-36 border-4 border-[#E6C9A2] rounded mt-2 left-1/2 transform -translate-x-1/2'></span>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
