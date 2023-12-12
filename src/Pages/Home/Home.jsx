import { useLoaderData } from "react-router-dom";
import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import TopFood from "../../Components/TopFood/TopFood";
import Counter from "../../Components/Counter/Counter";
import OurService from "../../Components/OurService/OurService";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import { Helmet } from "react-helmet";
import Translate from "../../Components/Translate/Translate";

const Home = () => {
  const foods = useLoaderData();
  // console.log(foods);

  return (
    <div>
      <Helmet>
        <title> DishDynamo | Home </title>
      </Helmet>
      <HeroSlider></HeroSlider>
      <TopFood foods={foods}></TopFood>
      <Counter></Counter>
      <OurService></OurService>
      <NewsLetter></NewsLetter>
      {/* <Translate></Translate> */}
    </div>
  );
};

export default Home;
