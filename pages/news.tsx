import React from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const news: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400 md:text-6xl">
          News
        </h1>
        <div className="w-full grid grid-cols-1 p-4 gap-y-4 md:w-[90%] md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4 lg:w-[80%]">
          <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="w-full flex items-start justify-center">
              <Image
                src="/src/news/betterindia.png"
                width={200}
                height={200}
                className=" object-contain p-2" loading="eager" placeholder="blur"
              ></Image>
            </div>
            <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
              <p className="text-justify p-2">
                Bihar Startup Helps Farmers Keep Veggies Fresh Up To 30 Days
                Without Refrigeration
              </p>
              <a
                target="_blank"
                href="https://www.thebetterindia.com/250005/fresh-vegetables-bihar-startup-farmers-saptkrishi-sabjikothi-iot-device-extend-shelf-life-fruits-startup-innovation-india-nor41"
                rel="noreferrer"
              >
                <button className="flex cursor-pointer mb-4 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Read More...
                </button>
              </a>
            </div>
          </div>

          <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="w-full flex items-start justify-center">
              <Image
                src="/src/news/bloc.jpg"
                width={200}
                height={200}
                className=" object-contain p-2" loading="eager" placeholder="blur"
              ></Image>
            </div>
            <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
              <p className="text-justify p-2">
                Neither fridge nor freezer, Sabzikothi keeps farm produce fresh
              </p>
              <a
                target="_blank"
                href="https://bloncampus.thehindubusinessline.com/entrepreneurship/sabzikothi-low-power-device-that-keeps-farm-produce-fresh-for-longer/article30109051.ece"
                rel="noreferrer"
              >
                <button className="flex cursor-pointer mb-4 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Read More...
                </button>
              </a>
            </div>
          </div>

          <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="w-full flex items-start justify-center">
              <Image
                src="/src/news/optimist.png"
                width={200}
                height={200}
                className=" object-contain p-2" loading="eager" placeholder="blur"
              ></Image>
            </div>
            <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
              <p className="text-justify p-2">
                This Bihar lad is helping farmers increase the shelf life of
                their produce
              </p>
              <a
                target="_blank"
                href="https://www.theoptimistcitizen.com/sabjikothi/"
                rel="noreferrer"
              >
                <button className="flex cursor-pointer mb-4 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Read More...
                </button>
              </a>
            </div>
          </div>

          <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="w-full flex items-start justify-center">
              <Image
                src="/src/news/yourstory.png"
                width={200}
                height={200}
                className=" object-contain p-2" loading="eager" placeholder="blur"
              ></Image>
            </div>
            <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
              <p className="text-justify p-2">
                This Bhagalpur agritech startup&apos;s Preservator helps farmers
                reduce produce wastage
              </p>
              <a
                target="_blank"
                href="https://yourstory.com/2021/02/startup-bharat-bhagalpur-agritech-startup-saptkrishi/amp"
                rel="noreferrer"
              >
                <button className="flex cursor-pointer mb-4 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Read More...
                </button>
              </a>
            </div>
          </div>

          <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="w-full flex items-start justify-center">
              <Image
                src="/src/news/indiaTimes.png"
                width={150}
                height={150}
                className=" object-contain rounded-full p-2" loading="eager" placeholder="blur"
              ></Image>
            </div>
            <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
              <p className="text-justify p-2">
                IIT Kanpur Engineer Built Cheap Cold Storage Device To Reduce
                Farmer&apos;s Losses
              </p>
              <a
                target="_blank"
                href="https://www.indiatimes.com/technology/news/iit-kanpur-engineer-cold-storage-fresh-produce-559870.html"
                rel="noreferrer"
              >
                <button className="flex cursor-pointer mb-4 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Read More...
                </button>
              </a>
            </div>
          </div>

          <div className="w-[250px] h-[300px] m-auto mb-4 flex items-center justify-start flex-col relative border border-[1px] border-slate-300 drop-shadow-xl rounded-lg shadow-inner  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">
            <div className="w-full flex items-start justify-center">
              <Image
                src="/src/news/csrbox.png"
                width={200}
                height={200}
                className="object-contain p-2" loading="eager" placeholder="blur"
              ></Image>
            </div>
            <div className="w-full flex flex-col items-center justify-center rounded absolute bottom-0  text-white">
              <p className="text-justify p-2">
                SaptKrishi has developed a &apos;Microcliate Storage/
                Sabjikothi,&apos; which is a low-cost storage and...
              </p>
              <a
                target="_blank"
                href="https://csrbox.org/India_CSR_products_Microcliate-Storage--Sabjikothi_256"
                rel="noreferrer"
              >
                <button className="flex cursor-pointer mb-4 items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
                  Read More...
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex  items-center justify-center p-4">
          <Splide
            aria-label="My Favorite Images"
            options={{
              rewind: true,
              rewindSpeed: 2000,
              type: "slide",
              perPage: 3,
              drag: "free",
              snap: true,
              focus: "center",
              gap: "1rem",
              arrows: true,
              pagination: true,

              breakpoints: {
                912: {
                  perPage: 2,
                  gap: ".7rem",
                },
                640: {
                  perPage: 1,
                  gap: ".7rem",
                },
              },
            }}
          >
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img47.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 1"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img7.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img27.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 1"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img72.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img32.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 1"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img37.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img62.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img57.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 2"
              ></Image>
            </SplideSlide>
            <SplideSlide className="flex items-center justify-center">
              <Image
                src="/src/news/img22.webp"
                width={500}
                height={450}
                className="object-fit rounded" loading="eager" placeholder="blur"
                alt="Image 2"
              ></Image>
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default news;
