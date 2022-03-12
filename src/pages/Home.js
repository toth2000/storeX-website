import React from "react";

import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Products from "../components/Products/Products";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Products products={[]} />
      <Newsletter />
    </>
  );
};

export default Home;
