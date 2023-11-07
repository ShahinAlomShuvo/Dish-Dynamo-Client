import { useLoaderData } from "react-router-dom";
import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import TopFood from "../../Components/TopFood/TopFood";
import Counter from "../../Components/Counter/Counter";
import OurService from "../../Components/OurService/OurService";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <HeroSlider></HeroSlider>
      <TopFood foods={foods}></TopFood>
      <Counter></Counter>
      <OurService></OurService>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
