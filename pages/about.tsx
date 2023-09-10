import React from "react";
import { NextPage } from "next";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";

const about: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-full flex flex-column items-center justify-center bg-white">
        {/* Saptkrishi */}
        <div className="w-full min-h-full flex flex-column items-center justify-center mt-8">
          <div className="w-[90%] p-4 text-center flex flex-column items-center justify-center rounded-xl shadow-lg shadow-slate-300 lg:p-16">
            <h1 className=" text-4xl md:text-5xl font-bold pb-8 pr-4 pl-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 md:text-6xl">
              SAPTKRISHI
            </h1>
            <ul className="text-center text-lg ">
              <li>
                Saptkrishi Scientific Pvt Ltd is an agri-tech startup committed
                to solve the problem of perishability of horti cultural
                commodities. We are focused on development of affordable,
                available and accessible storage and transportation solution
                directly to individual farmers, cooperatives, and traders to
                ensure better post-harvest outcomes. We also provide advisory,
                support on agri-processing and market linkages to farmers and
                traders engaged with horticulture. Incubated at Agri-Business
                Incubator, SKUAST-Jammu Under RKVY-RAFTAAR Project of Ministry
                of Agriculture and Farmers&apos; Welfare, Govt. of India. We are
                receiving technical support from IIT-Patna and receiving
                accelerated support from IIT Kanpur.
              </li>
            </ul>
          </div>
        </div>
        

        {/* Certificates */}
        <div className="w-[90%] min-h-full flex flex-col items-center justify-center rounded-xl shadow-lg shadow-slate-300 mt-16 p-8 mb-16">
          <div>
            <h1 className="text-5xl text-center font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 md:text-6xl">
              Awards & Certificates
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-16 m-auto">
            <div className="w-full flex items-center justify-center flex-wrap">
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10 ">
                <Image
                  src="/src/certificates/certificate1.webp"
                  width={450}
                  height={550}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/certificates/certificate2.webp"
                  width={450}
                  height={550}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/certificates/certificate3.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/certificates/certificate4.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/certificates/certificate5.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/certificates/certificate6.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/certificates/certificate7.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award9.jpg"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award10.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-90  m-2 flex items-center justify-center shadow-lg rounded transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award11.webp"
                  width={450}
                  height={450}
                  className="border rounded" loading="eager" placeholder="blur"
                  alt="..."
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}

        {/* <div className="w-[90%] min-h-full flex flex-col items-center justify-center rounded-xl shadow-lg shadow-slate-300 mt-8 p-16 mb-16">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 md:text-6xl">
              Awards
            </h1>
          </div>
          <div className="w-full flex items-center justify-center mt-16">
            <div className="w-full grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className=" w-48 h-48   flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10 ">
                <Image
                  src="/src/awards/Award8.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48   flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10 ">
                <Image
                  src="/src/awards/Award7.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48   flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10 ">
                <Image
                  src="/src/awards/Award1.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award2.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award3.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award4.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award5.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
              <div className=" w-48 h-48  flex items-center justify-center shadow-lg rounded-full transition ease-in-out duration-500 hover:scale-110 hover:z-10">
                <Image
                  src="/src/awards/Award6.png"
                  width={150}
                  height={150}
                  className=" object-contain rounded"
                  alt="..."
                ></Image>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default about;
