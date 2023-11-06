import { useLoaderData } from "react-router-dom";
import HeroSlider from "../../Components/Header/Slider/HeroSlider";
import TopFood from "../../Components/TopFood/TopFood";

const Home = () => {
  const foods = useLoaderData();
  return (
    <div>
      <HeroSlider></HeroSlider>
      <TopFood foods={foods}></TopFood>
    </div>
  );
};

export default Home;
