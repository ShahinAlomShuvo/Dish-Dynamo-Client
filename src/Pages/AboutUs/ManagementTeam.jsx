import owner from "../../assets/Images/owner.jpg";
import customerCare from "../../assets/Images/customer-careist.jpg";
import coFounder from "../../assets/Images/co-founder.jpg";
import specialist from "../../assets/Images/specialist.jpg";
import { useEffect } from "react";
import Aos from "aos";

const ManagementTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 xl:px-0'>
      {/* owner  */}
      <div data-aos='zoom-in' className='card  bg-base-100 '>
        <figure>
          <img src={owner} className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Nick Mcallister</h2>
          <p>Owner</p>
        </div>
      </div>
      {/* co-founder  */}
      <div data-aos='zoom-in' className='card  bg-base-100 '>
        <figure>
          <img src={coFounder} className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Benj Spitch</h2>
          <p>Co-Founder</p>
        </div>
      </div>
      {/* CUSTOMER CARE */}
      <div data-aos='zoom-in' className='card  bg-base-100 '>
        <figure>
          <img src={customerCare} className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Ralph Johnson</h2>
          <p>Customer-Care</p>
        </div>
      </div>
      {/* Specialist */}
      <div data-aos='zoom-in' className='card  bg-base-100 '>
        <figure>
          <img src={specialist} className='rounded-xl' />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>Tom Zafron</h2>
          <p>Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default ManagementTeam;
