import Aos from "aos";
import { useEffect } from "react";

const OrderCard = ({ order, deleteHandler }) => {
  const { foodImageUrl, _id, userName, buyingDate, foodName, quantity, price } =
    order;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos='fade-up'>
      <div className='card flex-wrap  lg:flex-nowrap card-side bg-base-100 shadow-xl'>
        <figure>
          <img className='max-w-full h-full' src={foodImageUrl} />
        </figure>
        <div className='card-body w-full'>
          <h2 className='card-title lg:text-base xl:text-xl'>{foodName}</h2>
          <p>Price: ${price}</p>
          <p>Buyer Name:{userName}</p>
          <p>Buying Date:{buyingDate}</p>
          <div className='card-actions justify-end'>
            <button
              onClick={() => deleteHandler(_id)}
              className='btn bg-[#E6C9A2] text-[#0e1927] border border-transparent hover:border-[#E6C9A2] hover:bg-transparent  capitalize py-2 px-4 rounded-md transition duration-300 ease-in-out '
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
