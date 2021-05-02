import React from "react";
import Carosal from "../Component/Carosal";
import Navbar from "../Component/Navbar";
import Services from "../Component/Services";
import FeaturedArticles from "../Component/FeaturedArticles";

function Home() {
  return (
    <div>
      <Carosal />
      <Services />
      <FeaturedArticles />
    </div>
  );
}

export default Home;
