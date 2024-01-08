import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AddedFoodRow = ({ food }) => {
  const { _id, foodImageUrl, foodName, price, quantity } = food;
  console.log(food);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <tr data-aos='fade-up'>
      <th>
        <label>
          <input type='checkbox' className='checkbox' />
        </label>
      </th>
      <td>
        <div className='flex items-center space-x-3'>
          <div className='avatar'>
            <div className='mask mask-squircle w-12 h-12'>
              <img src={foodImageUrl} />
            </div>
          </div>
          <div>
            <div className='font-bold'>{foodName}</div>
          </div>
        </div>
      </td>
      <td>{quantity}</td>
      <td>$ {price}</td>
      <th>
        <Link
          to={`/foodUpdate/${_id}`}
          className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent  capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
        >
          Update
        </Link>
      </th>
    </tr>
  );
};

export default AddedFoodRow;
