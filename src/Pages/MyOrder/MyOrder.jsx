import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";
import OrderCard from "./OrderCard";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  const url = `https://dish-dynamo-server.vercel.app/orderFoods?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setOrders(res.data);
    });
  }, [url]);

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://dish-dynamo-server.vercel.app/orderFoods/${id}`, {
          method: "DELETE",
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title> DishDynamo | MyOrder </title>
      </Helmet>
      <div className='grid md:grid-cols-2 gap-5 container mx-auto py-10'>
        {orders.length === 0 ? (
          <p className='col-span-2 text-center'>No Order Product</p>
        ) : (
          orders.map((order) => (
            <OrderCard
              deleteHandler={deleteHandler}
              key={order._id}
              order={order}
            ></OrderCard>
          ))
        )}
      </div>
    </div>
  );
};

export default MyOrder;
