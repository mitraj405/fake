import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

const HallOfFame: NextComponentType = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Splide
        className="w-full flex items-center justify-center relative"
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          rewindSpeed: 500,
          type: "slide",
          perPage: 1,
          drag: "free",
          snap: true,
          focus: "center",
          gap: "1rem",
          perMove: 1,
          autoplay: true,
          pagination: false,
          arrows: false,
          pauseOnHover: false,
          breakpoints: {
            912: {
              gap: ".7rem",
            },
            640: {
              gap: ".7rem",
            },
          },
        }}
      >
        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/modiji/modiji2.webp"
            width={2000}
            height={1000}
            className="w-full h-full object-fit"
			loading="eager" placeholder="blur" priority
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute lg:bottom-[20%] md:p-2 lg:p-8 flex flex-col items-center justify-end">
            <p className=" text-sm text-white md:mb-2 lg:mb-4 font-bold md:text-2xl lg:text-4xl text-center">
              Demonstration of Sabjikothi to Hon. Prime Minister Shri. Narendra
              Modi , Lt. Governor J&K Shri. Manoj Sinha , Minister of Panchayati
              Raj Shri. Giriraj Singh
            </p>
            <Link href={"/gallery/#modiji"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/sharkTank/st7.webp"
            width={2000}
            height={1000}
            className="w-full h-full object-fit"
			loading="eager" placeholder="blur" priority
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute lg:bottom-[20%] md:p-2 lg:p-8 flex flex-col items-center justify-end">
            <p className=" text-sm text-white md:mb-2 lg:mb-4 font-bold mb-2 md:text-2xl lg:text-4xl text-center">
              Sabjikothi, As seen in sharktank India.
            </p>
            <Link href={"/gallery/#shark-tank"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/img1.webp"
            width={2000}
            height={1000}
            className="w-full h-full object-fit"
			loading="eager" placeholder="blur"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute lg:bottom-[20%] md:p-2 lg:p-8 flex flex-col items-center justify-end">
            <p className=" text-[11px] text-white md:mb-2 lg:mb-4 font-bold md:text-2xl lg:text-4xl text-center">
              Solved champion award by United National Volunteer India, and
              Ministry of sports and youth affairs Govt. Of India and being
              conferred by Honble minister of sports and youth affairs Shri
              Anurag thakur
            </p>
            <Link href={"/gallery/#photos"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/gallery/img2.jpeg"
            width={2000}
            height={1000}
            className="w-full h-full object-fit"
			loading="eager" placeholder="blur"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute lg:bottom-[20%] md:p-2 lg:p-8 flex flex-col items-center justify-end">
            <p className=" text-sm text-white md:mb-2 lg:mb-4 font-bold md:text-2xl lg:text-4xl text-center">
              Demonstration of SabjiKothi to the UN Resident Coordinator Ms.
              Deirdre Boyd
            </p>
            <Link href={"/gallery/#photos"}>
              <button className="btn btn-primary rounded-full mb-2">
                Know More
              </button>
            </Link>
          </div>
        </SplideSlide>

        <SplideSlide className=" w-full h-auto flex items-center justify-center relative">
          <Image
            src="/src/HappyFace.webp"
            width={2000}
            height={1000}
            className="w-full h-full object-fit"
			loading="eager" placeholder="blur"
          ></Image>
          <div className="w-full h-full absolute top-0 flex flex-col items-center justify-end bg-black opacity-40"></div>
          <div className="w-full h-full absolute md:bottom-[30%] lg:bottom-[20%] md:p-2 lg:p-8 flex flex-col items-center justify-end">
            <p className=" text-sm text-white md:mb-2 lg:mb-4 font-bold md:text-2xl lg:text-4xl text-center mb-8">
              Our Happy Customer
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HallOfFame;
