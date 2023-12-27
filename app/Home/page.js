"use client";
import React from "react";

import NewsHome from "@/Components/NewsHome";
import Footer from "@/Components/Footer";
import SipCalculator from "@/Components/SipCalculator";
import HomeCalculators from "@/Components/CalculatorsBanner";

const Home = () => {
  return (
    <div>
      <HomeCalculators />
      <NewsHome />
      <Footer />
    </div>
  );
};

export default Home;
