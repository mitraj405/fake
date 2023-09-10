import React, { useState, useRef } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";
import { database } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

type Inputs = {
  ProductName?: string;
  FullName?: string;
  Email?: string;
  MobileNo?: number;
  State?: string;
  City?: string;
  Quantity?: number;
};

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
const schema = yup.object().shape({
  FullName: yup
    .string()
    .min(3, "Minimum 3 chracters required")
    .required("Required"),
  Email: yup
    .string()
    .matches(emailPattern, { message: "email is invalid" })
    .required("Required"),
  MobileNo: yup.number().positive().integer().required("Required"),
  State: yup.string().min(3).required("Required"),
  City: yup.string().min(3).required("Required"),
  Quantity: yup
    .number()
    .min(1, "Minimum quantity is 1.")
    .positive("enter positive quantity")
    .integer()
    .required("Required"),
});

// interface productProps {

// }

interface Props {
  productsList: Array<{ id: number; name: string; imgURL: string }>;
}

const book: NextPage<Props> = ({ productsList }) => {
  const router = useRouter();
  const {
    query: { name },
  } = router;
  const productName = productsList.find((item) => item.name === name);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });
  const [inputData, setInputData] = useState<Inputs>();

  const buttonRef = useRef(null);
  const collectionRef = collection(database, "Bookings");

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    event.preventDefault();
    const newInput = { [event.target.name]: event.target.value };

    // console.log(newInput)
    setInputData({ ...inputData, ...newInput });
  };
  const onSubmit = (data: Inputs) => {
    // buttonRef.current.disabled = true;
    // console.log(data);
    addDoc(collectionRef, {
      product_name: productName ? productName.name : "SabjiKothi",
      full_name: data.FullName,
      email: data.Email,
      mobile_no: data.MobileNo,
      state: data.State,
      city: data.City,
      quantity: data.Quantity,
    })
      .then(() => {
        alert("Booking Confirmed!");
        emailjs
          .send(
            'service_j3p69bi', // eslint-disable-line
            'r#1@T_2ws&u4pCdf', // eslint-disable-line
            data,
            'ohHp-61AbvNbPvlHb'
          )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((err) => {
            console.log("FAILED...", err);
          });
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const [isTerms, setTerms] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const handleTerms = () => {
    setTerms(!isTerms);
  };
  const handleCheck = () => {
    setChecked(!isChecked);
  };
	
  return (
    <div className="relative">
      <NavBar />
      <form method="POST" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="w-full mih-h-screen flex justify-center">
          <div className="w-full mih-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full mih-h-screen flex justify-center">
              <div className="flex-cols items-center content-center p-12">
                <div className="content-center items-center  justify-center">
                  <h1 className="flex text-center items-center justify-center font-semibold text-4xl">
                    {productName ? productName.name : "SabjiKothi"} Booking Form
                  </h1>
                </div>
                <div className="w-full flex flex-cols items-center mt-4">
                  <div>
                    <Image
                      src={
                        productName
                          ? productName.imgURL
                          : "/src/products/SabjiKothi.webp"
                      }
                      width={650}
                      height={600}
                      className="flex items-center justify-center rounded" placeholder="blur"
                    ></Image>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mih-h-screen flex items-center justify-center">
              <div className="w-[90%]  mih-h-screen border shadow-lg p-3 mb-5 bg-body rounded lg:w-3/4">
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    // name="ProductName"
                    value={productName ? productName.name : "SabjiKothi"}
                    readOnly
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Product name"
                    {...register("ProductName", {
                      required: true,
                      maxLength: 50,
                    })}
                    // onClick={(event) => handleInput(event)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="FullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    // name="FullName"
                    className="form-control"
                    id="FullName"
                    placeholder="Name"
                    {...register("FullName", { required: true, maxLength: 50 })}
                    onBlur={(event) => handleInput(event)}
                  />
                  {errors.FullName && (
                    <p className="text-sm bg-red-300 text-red-600 p-2 rounded">
                      Enter your name
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    // name="Email"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="example@email.com"
                    {...register("Email", { required: true, maxLength: 50 })}
                    onBlur={(event) => handleInput(event)}
                  />
                  {errors.Email && (
                    <p className="text-sm bg-red-300 text-red-600 p-2 rounded">
                      Enter valid email address
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput3"
                    className="form-label"
                  >
                    Mob. No.
                  </label>
                  <input
                    type="tel"
                    // name="MobileNo"
                    className="form-control"
                    id="formGroupExampleInput3"
                    placeholder="1234567890"
                    {...register("MobileNo", {
                      required: true,
                      minLength: 10,
                      pattern:
                        /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/, //eslint-disable-line
                    })}
                    onBlur={(event) => handleInput(event)}
                  />
                  {errors.MobileNo && (
                    <p className="text-sm bg-red-300 text-red-600 p-2 rounded">
                      Enter valid mobile number
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlSelect1">
                    Select State
                  </label>
                  <select
                    className="form-control"
                    // name="State"
                    id="exampleFormControlSelect1"
                    {...register("State", { required: true })}
                    onBlur={(event) => handleInput(event)}
                  >
                    <option value={"Andhra Pradesh"}>Andhra Pradesh</option>
                    <option value={"Andaman and Nicobar Islands"}>
                      Andaman and Nicobar Islands
                    </option>
                    <option value={"Arunachal Pradesh"}>
                      Arunachal Pradesh
                    </option>
                    <option value={"Assam"}>Assam</option>
                    <option value={"Bihar"}>Bihar</option>
                    <option value={"Chhattisgarh"}>Chhattisgarh</option>
                    <option value={"Delhi"}>Delhi</option>
                    <option value={"Goa"}>Goa</option>
                    <option value={"Gujarat"}>Gujarat</option>
                    <option value={"Haryana"}>Haryana</option>
                    <option value={"Himachal Pradesh"}>Himachal Pradesh</option>
                    <option value={"Jammu and Kashmir"}>
                      Jammu and Kashmir
                    </option>
                    <option value={"Jharkhand"}>Jharkhand</option>
                    <option value={"Karnataka"}>Karnataka</option>
                    <option value={"Kerala"}>Kerala</option>
                    <option value={"Madhya Pradesh"}>Madhya Pradesh</option>
                    <option value={"Maharashtra"}>Maharashtra</option>
                    <option value={"Manipur"}>Manipur</option>
                    <option value={"Meghalaya"}>Meghalaya</option>
                    <option value={"Mizoram"}>Mizoram</option>
                    <option value={"Nagaland"}>Nagaland</option>
                    <option value={"Odisha"}>Odisha</option>
                    <option value={"Rajasthan"}>Rajasthan</option>
                    <option value={"Sikkim"}>Sikkim</option>
                    <option value={"Tamil Nadu"}>Tamil Nadu</option>
                    <option value={"Telangana"}>Telangana</option>
                    <option value={"Tripura"}>Tripura</option>
                    <option value={"Uttar Pradesh"}>Uttar Pradesh</option>
                    <option value={"Uttarakhand"}>Uttarakhand</option>
                    <option value={"West Bengal"}>West Bengal</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput5"
                    className="form-label"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    // name="City"
                    className="form-control"
                    id="formGroupExampleInput5"
                    placeholder="city"
                    {...register("City", { required: true })}
                    onBlur={(event) => handleInput(event)}
                  />
                  {errors.City && (
                    <p className="text-sm bg-red-300 text-red-600 p-2 rounded">
                      Enter city name
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput6"
                    className="form-label"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    // name="Quantity"
                    className="form-control"
                    id="formGroupExampleInput6"
                    placeholder="1"
                    {...register("Quantity", { required: true, min: 1 })}
                    onBlur={(event) => handleInput(event)}
                  />
                  {errors.Quantity && (
                    <p className="text-sm bg-red-300 text-red-600 p-2 rounded">
                      Enter valid quantity
                    </p>
                  )}
                </div>
				<div className="mb-3 cursor-pointer">
                  <div
                    onClick={handleTerms}
                    className="border-[1.5px] border-gray-300 rounded-lg p-2 flex items-center justify-between"
                  >
                    <p>Terms and conditions</p>
                    {isTerms ? <IoChevronUp /> : <IoChevronDown />}
                  </div>
                  {isTerms ? (
                    <div className="text-justify px-4 lg:px-8">
                      <ul className="list-disc pt-2">
                        <li>
                          By purchasing this product you are agreeing on terms
                          and conditions for storing fruits and vegetables.
                        </li>
                        <li>Product is not returnable.</li>
                        <li>
                          Any damage (also shipping damage) in a product will be
                          dealt in a 1 month of a period.
                        </li>
						<li>
                          In no event shall we be liable for any special,
                          incidental, indirect or consequential damages of any
                          kind in connection with these terms of use, even if we
                          have been informed in advance of the possibility of
                          such damages.
                        </li>
                        <a
                          href="/terms"
                          className="text-emerald-500 border-b-2 border-emerald-500"
                        >
                          Know More
                        </a>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onClick={handleCheck}
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Agree and Accept
                  </label>
                </div>
                <div>
                  {isChecked ? (
                    <button
                      type="submit"
                      className="btn btn-outline-success rounded-full "
                      ref={buttonRef}
                    >
                      Book Now
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled
                      className="btn btn-outline-success rounded-full "
                      ref={buttonRef}
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

book.getInitialProps = () => {
  const productsList: Array<{ id: number; name: string; imgURL: string }> = [
    {
      id: 1,
      name: "SabjiKothi",
      imgURL: "/src/products/SabjiKothi.webp",
    },

    {
      id: 2,
      name: "SabjiKothi Cart",
      imgURL: "/src/products/threeWheelCart.webp",
    },

    {
      id: 3,
      name: "SabjiKothi E-Cart",
      imgURL: "/src/products/SabjiKothiECart.webp",
    },
    {
      id: 4,
      name: "Nano Kawach Pesticide",
      imgURL: "/src/products/NanoKawach.webp",
    },
  ];
  return { productsList };
};

export default book;
