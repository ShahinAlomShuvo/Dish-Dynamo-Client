import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderRow from "./OrderRow";
import axios from "axios";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  console.log(orders);

  const url = `http://localhost:5000/usersFood?email=${user?.email}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setOrders(res.data);
    });
  }, [url]);

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = orders.filter((order) => order._id !== id);
        setOrders(remaining);
      });
  };

  const handleOrderConfirm = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = orders.filter((order) => order._id !== id);
        const updated = orders.find((order) => order._id === id);
        updated.status = "confirm";
        const updatedOrder = [updated, ...remaining];
        setOrders(updatedOrder);
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
            {orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                deleteHandler={deleteHandler}
                handleOrderConfirm={handleOrderConfirm}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
