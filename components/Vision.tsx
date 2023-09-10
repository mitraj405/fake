import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import "@splidejs/react-splide/css";

const Vision: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-3xl md:text-5xl text-center p-2">
        Sustainable Development Goals that Drive Our Mission
      </h1>

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
            height: "250px",

            grid: {
              // You can define rows/cols instead of dimensions.
              dimensions: [[1, 6]],
              gap: {
                row: "30px",
                col: "30px",
              },
            },

            breakpoints: {
              640: {
                grid: {
                  // You can define rows/cols instead of dimensions.
                  dimensions: [[2, 3]],
                },
              },
            },
          }}
          extensions={{ Grid }}
        >
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 rounded">
              <Image
                src="/src/vision/vision1.jpeg"
                width={200}
                height={200}
                className="rounded object-contain" placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 rounded">
              <Image
                src="/src/vision/vision2.jpeg"
                width={200}
                height={200}
                className="rounded object-contain" placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 rounded">
              <Image
                src="/src/vision/vision3.jpeg"
                width={200}
                height={200}
                className="rounded object-contain" placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 rounded">
              <Image
                src="/src/vision/vision4.jpeg"
                width={200}
                height={200}
                className="rounded object-contain" placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>

          <SplideSlide className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 rounded">
              <Image
                src="/src/vision/vision5.jpeg"
                width={200}
                height={200}
                className="rounded object-contain" placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
          <SplideSlide className="flex items-center justify-center">
            <div className="w-full items-center justify-center rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 rounded">
              <Image
                src="/src/vision/vision6.jpeg"
                width={200}
                height={200}
                className="rounded object-contain" placeholder="blur"
              ></Image>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Vision;
