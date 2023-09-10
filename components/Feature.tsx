import React from "react";
import { NextComponentType } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const Feature: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl">Features</h1>
      <div className="w-full flex items-center justify-center p-8">
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            rewindSpeed: 2000,
            type: "slide",
            perPage: 3,
            drag: "free",
            snap: true,
            perMove: 1,
            gap: "30px",
            autoplay: true,
            pauseOnHover: false,
            breakpoints: {
              912: {
                perPage: 2,
                gap: "30px",
                perMove: 2,
              },
              640: {
                perPage: 1,
                gap: "30px",
                perMove: 1,
              },
            },
          }}
        >
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/Feature/cleanEnergy.webp"
              width={350}
              height={350}
              className="object-fit rounded"
              alt="Clean Energy" loading="eager" placeholder="blur"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/Feature/carbonFootprint.webp"
              width={350}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Reduces Carbon Footprint"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/Feature/zeroMaint.webp"
              width={350}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Zero maintainance"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/Feature/chemFree.webp"
              width={350}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Chemical Free"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/Feature/saveEnergy.webp"
              width={350}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Saves Energy"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/Feature/envFrind.webp"
              width={350}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Environment Friendly"
            ></Image>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Feature;
