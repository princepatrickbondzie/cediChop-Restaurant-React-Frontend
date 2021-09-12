import React from "react";
import "./index.css";
import Navigation from "../../components/nav";
import Slider from "../../components/header/Slider";
import Dishes from "../../components/dishes";
import WhyUs from "../../components/whyUs";
import OurMenu from "../../components/menu";
import Review from "../../components/review";
import Order from "../../components/order";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <Dishes />
      <WhyUs />
      <OurMenu />
      <Review />
      <Order />
      <Footer />
    </div>
  );
};
export default Home;
