import React from "react";
import type { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Supporters from "../components/Supporters";
import SocialMedia from "../components/SocialMedia";
import Media from "../components/Media";
import Feature from "../components/Feature";
import Awards from "../components/Awards";
import Technology from "../components/Product/Technology";
import HallOfFame from "../components/HallOfFame";
import Videos from "../components/Videos";
import Vision from "../components/Vision";
const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen p-0 m-0 scroll-smooth">
      <NavBar />
      <Media />
      <HallOfFame />
      <Intro />
      <Feature />
      <Products />
      <Videos />
      <Technology />
      <SocialMedia />
      <Supporters />
      <Awards />
      <Vision />
      <Footer />
    </div>
  );
};

export default Home;
