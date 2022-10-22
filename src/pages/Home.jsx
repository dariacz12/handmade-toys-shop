import React from "react";
import Slider from "../components/Slider";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
