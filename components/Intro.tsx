import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";

const Intro: NextComponentType = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 relative mt-8">
      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/src/Thela-and-Box3D.webp"
            width={524}
            height={434}
			loading="eager"
			placeholder="blur"
          ></Image>
        </div>
      </div>
      <div className="w-full flex items-center justify-center md:items-start md:justify-start">
        <div className="w-3/4 h-full flex flex-col items-center justify-center md:items-start">
          <h1 className="font-semibold pb-2 md:pb-4 text-6xl text-orange-600">
            Sabji<span className="text-green-700">Kothi</span>
          </h1>
          <div className="flex items-center justify-center md:items-start">
            <p className="text-xl text-justify">
              Unleashing the power of microclimate to extend the shelf-life of
              fruits and vegetables.
            </p>
          </div>
          <div className="pt-2 flex items-center justify-center md:pt-4">
            <Link href="book/">
              <a>
                <button className="flex items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Book Now
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
