import React from "react";
import { NextComponentType } from "next";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
const Media: NextComponentType = () => {
  return (
    <>
      <div className="w-[50px] h-[250px] fixed bottom-[25%] right-2 flex flex-col rounded  z-50 cursor-pointer transition duration-200 ease-in-out">
        <div className="w-[50px] h-[50px] absolute bottom-[100%] right-0 flex items-center justify-center bg-blue-800  rounded-full hover:scale-110 transition duartion-100 shadow-inner drop-shadow-xl">
          <a
            href="https://www.facebook.com/saptkrishi"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF className="text-2xl text-white font-bold shadow-md" />
          </a>
        </div>
        <div className="w-[50px] h-[50px] absolute bottom-[75%] right-0 flex items-center justify-center bg-sky-600  rounded-full hover:scale-110 transition duartion-100 shadow-inner drop-shadow-xl">
          <a
            href="https://twitter.com/saptkrishi?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-2xl text-white font-bold shadow-md" />
          </a>
        </div>
        <div className="w-[50px] h-[50px] absolute bottom-[50%] right-0 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-full hover:scale-110 transition duartion-100 shadow-inner drop-shadow-xl">
          <a
            href="https://www.instagram.com/saptkrishi/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl text-white font-bold shadow-md" />
          </a>
        </div>
        <div className="w-[50px] h-[50px] absolute bottom-[25%] right-0 flex items-center justify-center bg-sky-700  rounded-full hover:scale-110 transition duartion-100 shadow-inner drop-shadow-xl">
          <a
            href="https://www.linkedin.com/company/saptkrishi/?originalSubdomain=in"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl text-white font-bold shadow-md" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Media;
