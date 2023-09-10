import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { Grid } from "@splidejs/splide-extension-grid";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const Supporters: NextComponentType = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl md:text-6xl">Our Supporters</h1>

      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <Image
              src="/src/supporters/siicllogoAssetLOf.png"
              width={650}
              height={150}
              className="rounded object-fit"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/Incubation-Center-IIT-Patna-Logo-Original-Colors.png"
              width={200}
              height={200}
              className="rounded-full object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/uast.jpeg"
              width={180}
              height={180}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/abiJammu.jfif"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/mafw.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/panchayatiRaj.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/msme.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/mst.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/rtagiitk.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/rkvy.jpeg"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
			
			<div className="slide">
            <Image
              src="/src/supporters/nexus-logo.png"
              width={500}
              height={400}
              className="rounded object-contain"
            ></Image>
          </div>
			
          <div className="slide">
            <Image
              src="/src/supporters/siicllogoAssetLOf.png"
              width={650}
              height={150}
              className="rounded object-fit"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/Incubation-Center-IIT-Patna-Logo-Original-Colors.png"
              width={200}
              height={200}
              className="rounded-full object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/uast.jpeg"
              width={180}
              height={180}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/abiJammu.jfif"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/mafw.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/panchayatiRaj.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/msme.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
          <div className="slide">
            <Image
              src="/src/supporters/mst.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/rtagiitk.png"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>

          <div className="slide">
            <Image
              src="/src/supporters/rkvy.jpeg"
              width={200}
              height={200}
              className="rounded object-contain"
				loading="eager" placeholder="blur"
            ></Image>
          </div>
			
			<div className="slide">
            <Image
              src="/src/supporters/nexus-logo.png"
              width={500}
              height={400}
              className="rounded object-contain"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supporters;
