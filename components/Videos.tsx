import React from "react";
import { NextComponentType } from "next";
import Iframe from "react-iframe";

const Photos: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 overflow-hidden">
      <p className="text-4xl text-center p-2 md:text-6xl">Videos</p>
      <div className="w-full grid place-items-center grid-cols-1 p-4 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4">
        <div className="w-full h-auto flex flex-col items-center justify-center rounded">
          <Iframe
            url="https://www.youtube.com/embed/fb4wdTeRYj0"
            width="300px"
            height="300px"
            className="rounded"
			loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center rounded">
          <Iframe
            url="https://www.youtube.com/embed/pdIAjg9fLno"
            width="300px"
            height="300px"
            className="rounded"
			loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center rounded">
          <Iframe
            url="https://www.facebook.com/plugins/video.php?height=300&href=https%3A%2F%2Fwww.facebook.com%2Fsharktank.india%2Fvideos%2F227593306249977%2F&show_text=false&width=300&t=0"
            width="300px"
            height="300px"
            allowFullScreen={true}
            overflow="hidden"
            className="rounded"
			loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center rounded">
          <Iframe
            url="https://www.youtube.com/embed/vUDcOwmbGF4"
            width="300px"
            height="300px"
            className="rounded"
			loading="lazy"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default Photos;
