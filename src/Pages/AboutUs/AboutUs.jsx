import { Helmet } from "react-helmet";
import CommonBanner from "../../Components/CommonBanner/CommonBanner";
import aboutUs from "../../assets/Images/aboutUs.jpg";
import ManagementTeam from "./ManagementTeam";
import AboutSection from "../../Components/AboutSection/AboutSection";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title> DishDynamo | About Us </title>
      </Helmet>
      <CommonBanner bgImage={aboutUs} title={"About Us"}></CommonBanner>
      <div className='container mx-auto grid grid-cols-3 gap-8 items-center py-20'>
        <div>
          <h2 className='text-right text-4xl leading-10'>
            Hi! Our Restaurant has been present for over 20 years in the market.
            We make the most of all our customers.
          </h2>
        </div>
        <div>
          <p className='text-[#7e7e7e]'>
            At DishDynamo, we take pride in sourcing only the freshest, most
            exquisite ingredients to craft dishes that ignite the senses and
            elevate the palate. Our menu is a testament to creativity and
            precision, carefully curated to offer a symphony of flavors that
            celebrate the diversity of tastes and preferences.
          </p>
        </div>
        <div>
          <p className='text-[#7e7e7e]'>
            Our team consists of dedicated culinary artisans and attentive
            service professionals, all united by a passion for delivering
            exceptional dining experiences. From our talented chefs who
            orchestrate culinary masterpieces to our attentive service staff,
            every element of DishDynamo is designed to create moments that
            linger in memory.
          </p>
        </div>
      </div>
      <ManagementTeam></ManagementTeam>
      <AboutSection></AboutSection>
    </>
  );
};

export default AboutUs;
