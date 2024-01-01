"use client";
import React from "react";

import NewsHome from "@/Components/NewsHome";
import Footer from "@/Components/Footer";
import SipCalculator from "@/Components/SipCalculator";
import HomeCalculators from "@/Components/CalculatorsBanner";
import Portfolios from "@/Components/Portfolios";
import PortfolioGraph from "@/Components/portfoliograph";
const Home = () => {
  return (
    <div>
      <HomeCalculators />
      <Portfolios />

      <NewsHome />
      <Footer />
    </div>
  );
};

export default Home;
