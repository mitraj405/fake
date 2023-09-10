import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import BookNow from "../BookNow";
const NanoKawach: NextComponentType = () => {
  return (
    <div className="w-[95%] h-auto grid grid-cols-1 gap-4  rounded border border-gray-200 m-auto mt-4 pb-4 md:w-[85%]">
      <div className="w-full flex items-center justify-center relative m-auto p-2">
        <Image
          src="/src/products/NanoKawach.jpeg"
          width={500}
          height={450}
          className="rounded object-cover" loading="eager"
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center order-2 md:order-1">
        <p className="text-2xl font-bold mb-4 text-center uppercase">
          NanoKawach Pesticide
        </p>
        <div className="w-full flex items-center justify-center">
          <ul className="w-full gap-8 grid grid-cols-2 lg:grid-cols-3 p-2">
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl">
                <Image
                  src="/src/NanoKawach/BioDegradable.jpeg"
                  width={50}
                  height={50}
                  className="rounded-full" placeholder="blur"
                ></Image>
              </p>
              {/* <p className="text-green-700 mb-2 text-center">Yes</p> */}
              <p className="text-center">Biodegradable</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl">
                <Image
                  src="/src/NanoKawach/ChemicalFree.jpeg"
                  width={50}
                  height={50}
                  className="rounded-full"
                ></Image>
              </p>
              {/* <p className="text-green-700 mb-2 text-center">Upto 2 day</p> */}
              <p className="text-center">Chemical Free</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl">
                <Image
                  src="/src/NanoKawach/NanoTech.jpeg"
                  width={50}
                  height={50}
                  className="rounded-full"
                ></Image>
              </p>
              {/* <p className="text-green-700 mb-2 text-center">Yes</p> */}
              <p className="text-center">Nanoformulation</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl">
                <Image
                  src="/src/NanoKawach/EcoFriendly.jpeg"
                  width={50}
                  height={50}
                  className="rounded-full"
                ></Image>
              </p>
              {/* <p className="text-green-700 mb-2 text-center">Yes</p> */}
              <p className="text-center">Eco-friendly</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl">
                <Image
                  src="/src/NanoKawach/Natural.jpeg"
                  width={50}
                  height={50}
                  className="rounded-full"
                ></Image>
              </p>
              {/* <p className="text-green-700 mb-2 text-center">Upto 200 KG</p> */}
              <p className="text-center">Natural Ingredients</p>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <BookNow name={"Nano Kawach Pesticide"} />
        </div>
      </div>
    </div>
  );
};

export default NanoKawach;
