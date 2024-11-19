import React from "react";
import Home from "../src/Components/HeroSection";
import PopularItem from "../src/Components/PopularItem";
import OfferSection from "../src/Components/OfferSection";
import Collections from "../src/Components/Collections";
import NewsLetter from "../src/Components/NewsLetter";
const HomePage = () => {
  return (
    <div>
      <Home />
      <PopularItem />
      <OfferSection/>
      <Collections/>
      <NewsLetter/>
    </div>
  );
};

export default HomePage;
