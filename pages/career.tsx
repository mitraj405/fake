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


type Inputs = {
  FullName?: string;
  Email?: string;
  MobileNo?: string;
  FileUrl?: string;
  Message?: string;
};

const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line
const mobilenoPattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/; //eslint-disable-line
// const SUPPORTED_FORMATS = ["application/pdf", "application/msword"];
const schema = yup.object().shape({
  FullName: yup
    .string()
    .min(3, "Minimum 3 chracters required")
    .required("Required"),
  Email: yup
    .string()
    .matches(emailPattern, { message: "email is invalid" })
    .required("Required"),
  MobileNo: yup
    .string()
    .min(10, "Enter valid mobile no.")
    .max(10, "Enter valid mobile no.")
    .matches(mobilenoPattern, { message: "Mobile no. is invalid" })
    .required("Required"),
  FileUrl: yup.string().required("Required"),
  Message: yup.string().min(3).required("Required"),
});

const career: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const [inputData, setInputData] = useState<Inputs>();

  const buttonRef = useRef(null);
  const collectionRef = collection(database, "Career");

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      full_name: data.FullName,
      email: data.Email,
      mobile_no: data.MobileNo,
      fileurl: data.FileUrl,
      message: data.Message,
    })
      .then(() => {
        alert("Form Successfully Submitted!");
        emailjs
          .send(
            'service_zrfv4gh', // eslint-disable-line
            'template_j4e58vk', // eslint-disable-line
            data,
           'viUm-6ZFdzEYJfB43'
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

  return (
    <div className="relative">
      <NavBar />
      <form method="POST" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="w-full mih-h-screen flex justify-center bg-white">
          <div className="w-full h-full grid  grid-cols-1 place-items-center lg:grid-cols-2 border border-gray-200 m-4 xl:w-[70%]">
            <div className="w-full h-full flex items-center  justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={"/src/career.jpg"}
                  width={650}
                  height={600}
                  className="object-fit" placeholder="blur"
                ></Image>
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-center bg-white p-8">
              <div className="w-[95%]  h-full  bg-white lg:w-[80%]">
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
                    <p className="text-sm text-red-600 pt-2">
                      {errors.FullName.message}
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
                    <p className="text-sm text-red-600 p-2">
                      {errors.Email.message}
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
                    type="text"
                    // name="MobileNo"
                    className="form-control"
                    id="formGroupExampleInput3"
                    placeholder="1234567890"
                    {...register("MobileNo", {
                      required: true,
                      minLength: 10,
                      maxLength: 10,
                    })}
                    onBlur={(event) => handleInput(event)}
                  />
                  {errors.MobileNo && (
                    <p className="text-sm text-red-600 p-2">
                      {errors.MobileNo.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Your resume drive link
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="formFile"
                    {...register("FileUrl", { required: true })}
                    onChange={(event) => handleInput(event)}
                  />
                  {errors.FileUrl && (
                    <p className="text-sm text-red-600 p-2">
                      {errors.FileUrl.message}
                    </p>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    {...register("Message")}
                    onChange={(event) => handleInput(event)}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-outline-success rounded "
                    ref={buttonRef}
                  >
                    Send
                  </button>
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

export default career;
