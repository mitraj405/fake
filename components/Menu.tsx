import React from "react";
import { NextComponentType } from "next";
import Link from "next/link";

const Menu: NextComponentType = () => {
  return (
    <div
      className={`flex w-full min-h-screen items-center justify-center absolute top-20 bg-white z-10`}
    >
      <div className="w-full min-h-screen flex items-center justify-center">
        <ul className=" w-full flex text-4xl flex-col items-center justify-start">
          <Link href="/">
            <li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              Home
            </li>
          </Link>

          <Link href="products/">
            <li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              Products
            </li>
          </Link>

          <Link href="about/">
            <li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              About
            </li>
          </Link>

          <Link href="gallery/">
            <li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              Gallery
            </li>
          </Link>

          <Link href="news/">
            <li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              News
            </li>
          </Link>

          <Link href="team/">
            <li className="p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              Team
            </li>
          </Link>
          <Link href="career/">
            <li className="pt-2 pb-2 pl-4 pr-4 hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white">
              Career
            </li>
          </Link>

          <li className=" nav-item dropdown p-[15px] hover:cursor-pointer rounded-full hover:bg-emerald-500 hover:text-white lg:block">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brochure
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/Saptkrishi%20Brouchere%20English.pdf?alt=media&token=7a2c148c-ee81-4105-a6cd-2c22d189ccc6"
                  rel="noreferrer"
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20HINDI.jpg?alt=media&token=501c521f-6df6-4375-bf2a-a1e8aed7d8a0"
                  rel="noreferrer"
                >
                  Hindi
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20-%20ODIYA.jpg?alt=media&token=0fcd75a7-ac89-469d-87cc-3695e4ea03a1"
                  rel="noreferrer"
                >
                  Odiya
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20-Malayalam.jpg?alt=media&token=3383c388-b41b-4b74-b715-3b3656b32554"
                  rel="noreferrer"
                >
                  Malayalam
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/Sabjikothi%20-%20Tamil.jpg?alt=media&token=f7dfd715-04e6-4102-a720-dd272f7fc35a"
                  rel="noreferrer"
                >
                  Tamil
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  target="_blank"
                  href="https://firebasestorage.googleapis.com/v0/b/saptkrishi-8eb12.appspot.com/o/sabji%20kothi%20Marathi.jpg?alt=media&token=84c350ff-e514-4d85-8ba5-db1c0e089e3e"
                  rel="noreferrer"
                >
                  Marathi
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
