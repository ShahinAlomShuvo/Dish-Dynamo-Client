import { useLoaderData } from "react-router-dom";
import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import TopFood from "../../Components/TopFood/TopFood";
import Counter from "../../Components/Counter/Counter";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <HeroSlider></HeroSlider>
      <TopFood foods={foods}></TopFood>
      <Counter></Counter>
    </div>
  );
};

export default Home;
