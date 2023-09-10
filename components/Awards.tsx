import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import "@splidejs/react-splide/css";

const Supporters: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl">Awards</h1>

      <div className="w-full flex items-center justify-center m-8">
        <Splide
          className="w-full flex items-center justify-center"
          aria-label="My Favorite Images"
          options={{
            type: "slide",
            drag: false,
            snap: true,
            arrows: false,
            pagination: false,
            padding: "10px",

            grid: {
              // You can define rows/cols instead of dimensions.
              dimensions: [[2, 4]],
              gap: {
                row: "30px",
                col: "70px",
              },
            },

            breakpoints: {
              640: {
                grid: {
                  // You can define rows/cols instead of dimensions.
                  dimensions: [[3, 3]],
                  gap: {
                    row: "30px",
                    col: "50px",
                  },
                },
              },
            },
          }}
          extensions={{ Grid }}
        >
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award8.webp"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award7.webp"
                width={200}
                height={200}
				placeholder="blur"
                className="rounded object-contain"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award1.webp"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div>
              <Image
                src="/src/awards/Award2.webp"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award3.png"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div>
              <Image
                src="/src/awards/Award4.webp"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full flex items-center justify-around flex-col lg:flex-row">
              <Image
                src="/src/awards/Award5.webp"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div>
              <Image
                src="/src/awards/Award6.webp"
                width={200}
                height={200}
                className="rounded object-contain"
				placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Supporters;
