import React from "react";
import { NextComponentType } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const SharkTank: NextComponentType = () => {
  return (
    <div className="w-full pt-4" id="shark-tank">
      <h2 className="text-xl p-2 mb-2 border-l-8 border-emerald-600 md:text-4xl">
        SabjiKothi in Shark Tank
      </h2>
      <div className="w-full flex flex-col p-4  items-center justify-center lg:p-8">
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            rewindSpeed: 2000,
            type: "slide",
            perPage: 3,
            drag: "free",
            snap: true,
            focus: "center",
            gap: "1rem",
            perMove: 1,
            autoplay: true,
            breakpoints: {
              912: {
                perPage: 2,
                gap: ".7rem",
              },
              640: {
                perPage: 1,
                gap: ".7rem",
              },
            },
          }}
        >
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st1.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 1"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st2.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 2"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st3.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 1"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st4.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 2"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st5.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 1"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st6.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 2"
            ></Image>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <Image
              src="/src/gallery/sharkTank/st7.webp"
              width={500}
              height={350}
              className="object-fit rounded" loading="eager" placeholder="blur"
              alt="Image 2"
            ></Image>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default SharkTank;
