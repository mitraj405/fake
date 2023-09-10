import React from "react";
import { NextComponentType } from "next";

const Technology: NextComponentType = () => {
  return (
    <div className="w-full min-h-[50vh] grid grid-cols-1 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 mt-8  relative">
      <div
        className="w-full h-full flex items-center justify-center p-4 lg:p-16 relative"
        style={{
          backgroundImage: "url('/src/green-tech.jpg')",
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-justify text-4xl md:text-6xl text-center mb-4">
            TECHNOLOGY
          </h1>
          <p className="text-justify text-md font-semibold">
            Sabjikothi work by construction of self-adaptable, ethylene
            oxidizing, and near-sterile microclimate in an insulated chamber.
            The controlled microclimate created inside the insulated chamber
            inhibit pathogen growth, delays browning as well as ripening and
            regulate activity of antioxidant enzyme. It also oxidizes ethylene
            into hydrogen, carbon di-oxide, water vapour and other small
            molecules which further creates a controlled atmosphere that enables
            the storage of fruits and vegetables for anywhere upto 40 days.
          </p>
          <p className="text-justify text-md font-semibold">
            It is a self-sustainable solution that only require 20 watt of
            electricity either on-grid or off-grid, and a litre of water per
            day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
