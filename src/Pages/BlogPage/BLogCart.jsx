import Aos from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BLogCart = ({ blog }) => {
  const { _id, question, introduction, thumbnail, author, date } = blog;
  const navigate = useNavigate();
  const handleBlog = (_id) => {
    console.log(_id);
    navigate(`/blogPost/${_id}`);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos='zoom-in' onClick={() => handleBlog(_id)}>
      <div className='block aspect-w-4 aspect-h-3 '>
        <img className='object-cover  h-52' src={thumbnail} />
      </div>
      <span className='inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9'>
        {" "}
        Technology{" "}
      </span>
      <p className='mt-6 text-xl font-semibold'>
        <a href='#' title='' className='text-black'>
          {" "}
          {question}
        </a>
      </p>
      <p className='mt-4 text-gray-600'>
        {introduction.length > 100
          ? introduction.substring(0, 100)
          : introduction}
      </p>
      <div className='h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed'></div>
      <span className='block text-sm font-bold tracking-widest text-gray-500 uppercase'>
        {" "}
        {author} . {date}
      </span>
    </div>
  );
};

export default BLogCart;
