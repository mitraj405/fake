import React from "react";
import { NextPage } from "next";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SabjiKothi from "../components/Product/SabjiKothi";
import NanoKawach from "../components/Product/NanoKawach";
import SabjiKothiECart from "../components/Product/SabjiKothiECart";
import SabjiKothiCart from "../components/Product/SabjiKothiCart";

const Products: NextPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl ">Our Products</h1>
      <div className="w-full flex items-center justify-center mt-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 p-4 gap-4 pt-0">
          <SabjiKothi />
          <SabjiKothiCart />
          <SabjiKothiECart />
          <NanoKawach />
        </div>
      </div>
    </div>
  );
};

export default Products;
