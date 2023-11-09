import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import axios from "axios";
import AddedFoodRow from "./AddedFoodRow";
import { Helmet } from "react-helmet";

const MyAddedFood = () => {
  const { user } = useContext(AuthContext);

  const [usersFood, setUsersFood] = useState([]);

  useEffect(() => {
    const url = `https://dish-dynamo-server.vercel.app/usersfood?email=${user?.email}`;
    axios.get(url, { withCredentials: true }).then((res) => {
      setUsersFood(res.data);
    });
  }, [user?.email]);

  return (
    <div className='container mx-auto'>
      <Helmet>
        <title> DishDynamo | My Added Food </title>
      </Helmet>
      {usersFood.length === 0 ? (
        <p className='text-center py-20'>
          Currently You Do not Have Add Any Product
        </p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {usersFood.map((food) => (
                <AddedFoodRow key={food._id} food={food}></AddedFoodRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAddedFood;
