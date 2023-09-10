import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import {
  FaInbox,
  FaThermometerHalf,
  FaCarBattery,
  FaSolarPanel,
} from "react-icons/fa";
import { BsDisplayFill, BsFillKeyFill } from "react-icons/bs";

import BookNow from "../BookNow";

const SabjiKothiCart: NextComponentType = () => {
  return (
    <div className="w-[95%] h-auto grid grid-cols-1 gap-4  rounded border border-gray-200 m-auto mt-4 pb-4 md:w-[85%]">
      <div className="w-full flex items-center justify-center relative order-2 p-2">
        <Image
          src="/src/products/threeWheelCart.JPG"
          width={500}
          height={450}
          className="rounded object-cover" loading="eager" placeholder="blur"
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center order-2 md:order-1">
        <p className="text-2xl font-bold mb-4 uppercase">SabjiKothi Cart</p>
        <div className="w-full flex items-center justify-center">
          <ul className="w-full gap-8 grid grid-cols-2 lg:grid-cols-3 p-2">
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <BsDisplayFill />
              </p>
              <p className="text-green-700 mb-2 text-center">Yes</p>
              <p className="text-center">Display</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaCarBattery />
              </p>
              <p className="text-green-700 mb-2 text-center">Upto 2 day</p>
              <p className="text-center">Battery Backup</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <BsFillKeyFill />
              </p>
              <p className="text-green-700 mb-2 text-center">Yes</p>
              <p className="text-center">Lock Mechanism</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaSolarPanel />
              </p>
              <p className="text-green-700 mb-2 text-center">Yes</p>
              <p className="text-center">Solar Powered</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaInbox />
              </p>
              <p className="text-green-700 mb-2 text-center">Upto 200 KG</p>
              <p className="text-center">Storage Capacity</p>
            </li>
            <li className="w-full flex flex-col items-center justify-start">
              <p className="text-green-700 text-xl mb-2">
                <FaThermometerHalf />
              </p>
              <p className="text-green-700 mb-2 text-center">Yes</p>
              <p className="text-center">Insulation</p>
            </li>
          </ul>
        </div>
        <div className="pt-8">
          <BookNow name={"SabjiKothi Cart"} />
        </div>
      </div>
    </div>
  );
};

export default SabjiKothiCart;
