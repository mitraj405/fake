import React from "react";
import { NextPage } from "next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Profiles from "../components/Profiles";

const team: NextPage = () => {
  return (
    <div>
      <NavBar />
      <Profiles />
      <Footer />
    </div>
  );
};

export default team;
