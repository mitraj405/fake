import React, { useState } from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { database } from "../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

type Inputs = {
  Name: string;
  Email: string;
  Subject: number;
  Message: string;
};

const contact: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [inputData, setInputData] = useState({});
  const collectionRef = collection(database, "Queries");

  const handleInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newInput = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...newInput });
  };
  const onSubmit = (data: Inputs) => {
    addDoc(collectionRef, {
      name: data.Name,
      email: data.Email,
      subject: data.Subject,
      message: data.Message,
    })
      .then(() => {
        alert("Message received!");
        emailjs
          .send(
            'service_zrfv4gh', // eslint-disable-line
            'template_8kloukr', // eslint-disable-line
            data,
            'viUm-6ZFdzEYJfB43'
          )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
          })
          .catch((err) => {
            alert(`FAILED: ${err}`);
          });
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="w-full mih-h-screen flex flex-col items-center justify-center mt-8 p-4">
          <h1 className="text-4xl mb-8">Find on Google Map</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.1451954187555!2d80.22859511467087!3d26.515454383300344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39930458fb4b03cb%3A0xd3d50448218c5e30!2sSAPTKRISHI!5e0!3m2!1sen!2sin!4v1662316629702!5m2!1sen!2sin"
            width="300"
            height="300"
            className="w-full md:w-1/2"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full mih-h-screen flex flex-col items-center justify-center mt-8">
          <h1 className="text-4xl mb-8">Get in Touch</h1>
          <div className="w-3/4  mih-h-screen border shadow p-3 mb-5 bg-body rounded md:w-1/2">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                // name="Name"
                className={
                  errors.Name ? "form-control border-red-600" : "form-control"
                }
                id="formGroupExampleInput"
                placeholder="Name"
                {...register("Name", { required: true })}
                onChange={(event) => handleInput(event)}
              />
              {errors.Name && (
                <p className="text-sm text-red-600">Enter your name *</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                // name="Email"
                className={
                  errors.Email ? "form-control border-red-600" : "form-control"
                }
                id="formGroupExampleInput2"
                placeholder="example@email.com"
                {...register("Email", { required: true })}
                onChange={(event) => handleInput(event)}
              />
              {errors.Email && (
                <p className="text-sm text-red-600">
                  Enter your email address *
                </p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="formGroupExampleInput4" className="form-label">
                Subject
              </label>
              <input
                type="text"
                // name="Subject"
                className={
                  errors.Subject
                    ? "form-control border-red-600"
                    : "form-control"
                }
                id="formGroupExampleInput4"
                placeholder="subject"
                {...register("Subject", { required: true })}
                onChange={(event) => handleInput(event)}
              />
              {errors.Subject && (
                <p className="text-sm text-red-600">Enter subject *</p>
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
                // name="Message"
                className="form-control"
                id="exampleFormControlTextarea1"
                {...register("Message")}
                onChange={(event) => handleInput(event)}
              ></textarea>
            </div>

            <div>
              <button
                className="btn btn-outline-success rounded-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default contact;
