import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
const OrderFood = () => {
  const orderingFood = useLoaderData();

  const {
    _id,
    foodName,
    price,
    quantity,
    foodImageUrl,
    userEmail,
  } = orderingFood;

  const { user } = useAuth();
  const buyer = userEmail;
  const productQuantity = quantity;
  console.log(productQuantity);

  const ordersCount = 0;

  const handlePurchaseProduct = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const foodName = form.get("name");
    const quantity = form.get("quantity");
    const price = form.get("price");
    const buyingDate = form.get("date");
    const foodImageUrl = form.get("image");
    const userName = form.get("userName");
    const userEmail = form.get("userEmail");

    const purchaseFood = {
      foodName,
      quantity,
      price,
      buyingDate,
      userName,
      userEmail,
      foodImageUrl,
    };

    if (user.email === buyer) {
      return toast.error("You Can Not Buy Your Food");
    }

    if (productQuantity < 1) {
      return toast.error("Out Of Stock");
    }

    axios
      .post("http://localhost:5000/orderingfoods", purchaseFood)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Product PurChase Successfully");
        }
      });

    // count order

    axios
      .put(`http://localhost:5000/foods/${_id}`, {
        orders: ordersCount + 1,
      })
      .then((response) => {
        console.log(response.data);
      });

    //   count quantity

    axios
      .patch(`http://localhost:5000/foods/${_id}`, {
        quantity: quantity - 1,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <Helmet>
        <title> DishDynamo | Order </title>
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
        <div className='w-full  p-4   pt-20  '>
          <div className='relative py-10'>
            <h2 className='text-4xl md:text-6xl font-medium text-center uppercase tracking-[2.7px] pb-4 text-white'>
              Order Food
            </h2>
            <span className='absolute w-36 border-4 border-[#E6C9A2] rounded mt-2 left-1/2 transform -translate-x-1/2'></span>
          </div>

          <form
            className='space-y-6 border-2 py-6 rounded lg:border-none'
            onSubmit={handlePurchaseProduct}
          >
            <div className='grid md:grid-cols-2 gap-10 px-4 lg:px-16'>
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

              {/* date  */}
              <div className='col-span-2 md:col-span-1'>
                <label
                  htmlFor='date'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Date
                </label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  placeholder='Date'
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
                  readOnly
                  defaultValue={user.displayName}
                  type='text'
                  name='userName'
                  id='userName'
                  placeholder='User Name'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
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
                  readOnly
                  defaultValue={user.email}
                  type='email'
                  name='userEmail'
                  id='userEmail'
                  placeholder='User Name'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              {/* food image  */}
              <div className='col-span-2 '>
                <label
                  htmlFor='image'
                  className='block mb-2 text-base font-medium text-white dark:text-white'
                >
                  Food image Url
                </label>
                <input
                  defaultValue={foodImageUrl}
                  type='text'
                  name='image'
                  id='image'
                  placeholder=' Image url'
                  className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  required
                />
              </div>

              <button
                type='submit'
                className='w-full col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Purchase Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderFood;
