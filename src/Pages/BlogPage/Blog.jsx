import { useLoaderData } from "react-router-dom";
import BLogCart from "./BLogCart";

const Blog = () => {
  const blogData = useLoaderData();

  return (
    <div className='py-10 bg-white sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
            Latest from blog
          </h2>
          <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600'>
            Dive into the world of web development, Node.js, database
            comparisons, and more with expert insights. Discover the latest
            trends and tools to power your digital journey.
          </p>
        </div>

        <div className='grid  grid-cols-1  mt-12 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {blogData.map((blog) => (
            <BLogCart key={blog._id} blog={blog}></BLogCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
