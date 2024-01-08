import axios from "axios";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const userFood = useLoaderData();
  const navigate = useNavigate();

  const {
    description,
    userEmail,
    userName,
    foodCategory,
    foodOrigin,
    price,
    quantity,
    foodName,
    foodImageUrl,
  } = userFood;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const foodImageUrl = form.get("image");
    const foodName = form.get("name");
    const quantity = form.get("quantity");
    const price = form.get("price");
    const foodOrigin = form.get("foodOrigin");
    const foodCategory = form.get("category");
    const userName = form.get("userName");
    const userEmail = form.get("userEmail");
    const description = form.get("description");

    const updateFood = {
      foodImageUrl,
      foodName,
      quantity,
      price,
      foodOrigin,
      foodCategory,
      userName,
      userEmail,
      description,
    };
    e.target.reset();

    axios
      .put(`http://localhost:5000/usersfood/${userFood._id}`, updateFood)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          toast.success("Product Update Successfully");
          navigate(-1);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title> DishDynamo | UpdateFood </title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5Y6syyn/burger-fast-food-cheese-food-powerpoint-background-99cc6bd0c0-960-540.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className='w-full  p-4   pt-20'>
          <div className='relative py-10'>
            <h2 className='text-4xl md:text-6xl font-medium text-center uppercase tracking-[2.7px] pb-4 text-white'>
              Update Food
            </h2>
            <span className='absolute w-36 border-4 border-[#E6C9A2] rounded mt-2 left-1/2 transform -translate-x-1/2'></span>
          </div>
          <form
            className='space-y-6 border-2 py-6 rounded lg:border-none'
            onSubmit={handleUpdate}
          >
            <div className='grid md:grid-cols-2 gap-10 px-4 lg:px-16'>
              {/* food image  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='image'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Food Image
                </label>
                <input
                  defaultValue={foodImageUrl}
                  type='text'
                  name='image'
                  id='image'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  placeholder='Enter Image Url'
                  required
                />
              </div>

              {/* food name  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='name'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Food Name
                </label>
                <input
                  defaultValue={foodName}
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Product Name'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              {/* food quantity  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='quantity'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Food Quantity
                </label>
                <input
                  defaultValue={quantity}
                  type='number'
                  name='quantity'
                  id='quantity'
                  placeholder='Quantity'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>
              {/* food Price  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='price'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Food Price
                </label>
                <input
                  defaultValue={price}
                  type='number'
                  name='price'
                  id='price'
                  placeholder='$ Price'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              {/* food Origin  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='origin'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Food Origin
                </label>
                <input
                  defaultValue={foodOrigin}
                  type='text'
                  name='foodOrigin'
                  id='origin'
                  placeholder='Product Origin'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              {/* user (name)  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='userName'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  User Name
                </label>
                <input
                  defaultValue={userName}
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='User Name'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              {/* food Category  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='category'
                  className='block mb-2 text-base font-medium text-white dark:text-white '
                >
                  Category
                </label>

                <select
                  defaultValue={foodCategory}
                  name='category'
                  id='category'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                >
                  <option>Select a Category</option>
                  <option value='dessert'>Dessert</option>
                  <option value='chicken'>Chicken</option>
                  <option value='vegetarian'>Vegetarian</option>
                  <option value='miscellaneous'>Miscellaneous</option>
                  <option value='breakfast'>Breakfast</option>
                  <option value='seafood'>Seafood</option>
                  <option value='beef'>Beef</option>
                  <option value='pasta'>Pasta</option>
                </select>
              </div>

              {/* user (email)  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='userEmail'
                  className='block mb-2 text-base font-bold shadow-2xl text-white dark:text-white'
                >
                  User Email
                </label>
                <input
                  defaultValue={userEmail}
                  type='email'
                  name='userEmail'
                  id='userEmail'
                  placeholder='User Name'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              {/* Short Description */}
              <div className='col-span-2'>
                <label
                  htmlFor='description'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Description about Food :
                </label>
                <textarea
                  defaultValue={description}
                  name='description'
                  id='description'
                  placeholder='Describe the product...'
                  rows='4'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>
              <button
                type='submit'
                className='w-full col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Update Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateFood;
