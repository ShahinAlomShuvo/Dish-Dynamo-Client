import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import axios from "axios";
import AddedFoodRow from "./AddedFoodRow";

const MyAddedFood = () => {
  const { user } = useContext(AuthContext);

  const [usersFood, setUsersFood] = useState([]);

  const url = `http://localhost:5000/usersFood?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setUsersFood(res.data);
    });
  }, [url]);

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/usersFood/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = usersFood.filter((order) => order._id !== id);
        setUsersFood(remaining);
      });
  };

  return (
    <div>
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
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {usersFood.map((food) => (
              <AddedFoodRow
                key={food._id}
                food={food}
                deleteHandler={deleteHandler}
              ></AddedFoodRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
