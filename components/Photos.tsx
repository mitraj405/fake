import React from "react";
import { NextComponentType } from "next";
import Image from "next/image";
import Iframe from "react-iframe";

const Photos: NextComponentType = () => {
  return (
    <div className="w-full pt-4">
      <p className="text-4xl p-2 border-l-8 border-emerald-600" id="photos">
        Photos
      </p>
      <div className="w-full grid grid-cols-1 p-4 gap-y-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img1.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Conferred By Youth Affairs & Sports Shri. Minister Anurag Thakur
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img2.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to the UN Resident Coordinator Ms.
            Deirdre Boyd
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img3.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to the CM of Arunachal Pradesh Shri.
            Pema Khandu
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img4.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Interaction with Shri. Manoj Sinha <br></br>
            (Lieutenant Governor of Jammu & Kashmir)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img5.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Presentation of project to Prof. Ram Madhav
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img6.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Interaction with Prof. H.C Verma
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/imgWithProf.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Interaction with Shri. Saurabh Shrivastav<br></br>
            (Former chairman of Nasscom)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img7.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to Dr. Devansh Yadav<br></br>
            (IAS, Changlang Arunachal Pradesh)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img8.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Demonstration of Sabjikothi to SKAUST Chief (Jammu)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img9.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Talk with the Horticulture Team (Senior)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img10.webp"
            width={400}
            height={400} 
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Talk with the Horticulture Team (Senior)
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/upl.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Sabjikothi deployed at UPL centre for Agriculture excellence
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img11.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            SabjiKothi on Thela
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/img12.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Customer with SabjiKothi
          </p>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded">
          <Image
            src="/src/gallery/SabjiKothi.webp"
            width={400}
            height={400}
            className="object-cover rounded " placeholder="blur"
          ></Image>
          <p className="text-md p-4 text-center font-semibold">
            Visual of SabjiKothi with Fruits and Vegetables
          </p>
        </div>
      </div>

      <p className="text-4xl p-2 border-l-8 border-emerald-600">Videos</p>
      <div className="w-full grid grid-cols-1 p-4 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4">
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://youtube.com/embed/Hkw_DshpD9k"
            width="350px"
            height="350px"
            className="rounded" loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/fcvBBfiToCk"
            width="350px"
            height="350px"
            className="rounded" loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/xkc5BG0lylY"
            width="350px"
            height="350px"
            className="rounded" loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/fkRwxSoD6Ro"
            width="350px"
            height="350px"
            className="rounded" loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/jMkMuVtViAo"
            width="350px"
            height="350px"
            className="rounded" loading="lazy"
          ></Iframe>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-start rounded m-auto">
          <Iframe
            url="https://www.youtube.com/embed/fb4wdTeRYj0"
            width="350px"
            height="350px"
            className="rounded" loading="lazy"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default Photos;
