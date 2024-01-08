import { useLoaderData } from "react-router-dom";
import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import TopFood from "../../Components/TopFood/TopFood";
import Counter from "../../Components/Counter/Counter";
import OurService from "../../Components/OurService/OurService";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { Helmet } from "react-helmet";
import Banner from "../../Components/Header/Banner/Banner";
import ComboOffer from "../../Components/ComboOffer/ComboOffer";

const Home = () => {
  const foods = useLoaderData();

  return (
    <div>
      <Helmet>
        <title> DishDynamo | Home </title>
      </Helmet>
      {/* <HeroSlider></HeroSlider> */}
      <Banner></Banner>
      <ComboOffer></ComboOffer>
      <TopFood foods={foods}></TopFood>
      <Counter></Counter>
      <OurService></OurService>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
