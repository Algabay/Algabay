"use client";
import React from "react";

import NewsHome from "@/Components/NewsHome";
import Footer from "@/Components/Footer";
import DummyNews from "@/Components/DummyNews";
import HomeCalculators from "@/Components/CalculatorsBanner";
import Portfolios from "@/Components/Portfolios";

const Home = () => {
  return (
    <div>
      <HomeCalculators />
      <Portfolios />

      <DummyNews />
      <Footer />
    </div>
  );
};

export default Home;
