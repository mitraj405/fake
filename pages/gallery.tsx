import React from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SharkTank from "../components/SharkTank";
import Photos from "../components/Photos";
import Modiji from "../components/Modiji";

const gallery: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen flex flex-cols items-center justify-center flex-wrap">
        <h1 className="text-6xl p-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-6xl lg:text-8xl">
          Gallery
        </h1>
        <SharkTank />
        <Modiji />
        <Photos />
      </div>
      <Footer />
    </div>
  );
};

export default gallery;
