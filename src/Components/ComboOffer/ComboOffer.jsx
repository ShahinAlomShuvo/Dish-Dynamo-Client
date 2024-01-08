import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import combo1 from "../../assets/Images/combo1.jpg";
import combo2 from "../../assets/Images/combo2.jpg";
import combo3 from "../../assets/Images/combo3.jpg";
import combo4 from "../../assets/Images/combo4.jpg";
import combo5 from "../../assets/Images/combo5.jpg";
import combo6 from "../../assets/Images/combo6.jpg";
import SectionHeading from "../../Shared/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";

const ComboOffer = () => {
  return (
    <div>
      <SectionHeading
        title={"Combo Offer"}
        desc={"Eat Freely Without Worrying About The Price"}
      ></SectionHeading>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img className='w-full' src={combo1} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={combo2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={combo3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={combo4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={combo5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src={combo6} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ComboOffer;
