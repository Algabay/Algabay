import React, { useRef, useState } from "react";
import CalculatorsBanner from "./CalculatorsBanner";
import TradingViewChart from "./TradingViewChart";
import HeatMap from "./HeatMap";

const stockData = {
  Dividend: ["ONGC", "NPTC", "Indian Oil", "RECLTD", "Coal India"],
  Penny: [
    "Suzlon",
    "Yes Bank",
    "Triveni Glass",
    "Varanium Cloud",
    "Vikas Ecotech",
  ],
  FII: [
    "Fortis HealthCare",
    "Federal Bank Ltd",
    "Dr Redd's Laboratory",
    "KPR",
    "Union Bank",
  ],
  multiBagger: [
    "India Grid Trust",
    "JSW Holdings",
    "Max Health Care",
    "Varanium Cloud",
    "KPI Green",
  ],
  Growth: ["ITC", "BHEL", "Eicher Motors", "Mazagon", "IDFC LTD"],
};

const PortfoliosBanner = () => {
  const secondDivRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("Dividend");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function scroll() {
    secondDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <h4 className=" text-2xl mt-10  ml-24 font-bold text-white max-sm:text-xl max-sm:text-center max-sm:mt-10">
        STOCK PREDICTIONS ↘
      </h4>
      <div className="bg-black h-screen  text-white px-5 md:px-24  w-full flex flex-col md:flex-row justify-between items-center py-16 max-sm:py-4">
        <TradingViewChart />
      </div>
      <h4 className=" text-2xl mt-[80vh] ml-24 font-bold text-white max-sm:text-xl max-sm:text-center max-sm:mt-10">
        COMPANY HIGHLIGHTS ↘
      </h4>
      <div className="bg-black h-screen   text-white px-5 md:px-24  w-full flex flex-col md:flex-row justify-between items-center py-16 max-sm:py-4">
        <HeatMap />
      </div>

      {/* Section 2: Stock Selection Dropdown */}
      <div
        ref={secondDivRef}
        className="bg-black h-screen mt-[60vh] flex flex-col md:flex-row justify-around items-center w-full px-4 md:px-24 py-16 max-sm:py-4"
      >
        <div className="h-auto w-full md:w-[40%] bg-black rounded-3xl p-4 md:p-5 border border-neutral-700">
          <select
            name="stock"
            id="stock"
            className="w-full h-14 bg-white rounded-2xl text-lg md:text-xl font-light text-black text-center"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Dividend">High Dividend</option>
            <option value="Penny">Penny Stocks</option>
            <option value="FII">Strong FII Buying</option>
            <option value="multiBagger">Multi Bagger</option>
            <option value="Growth">High Growth</option>
          </select>
          {stockData[selectedCategory].map((stock, index) => (
            <div
              key={index}
              className="h-auto w-full py-3 md:py-5 bg-inidgo-50 text-lg md:text-xl font-light text-white flex justify-center items-center rounded-2xl my-2"
            >
              {stock}
            </div>
          ))}
        </div>
        <div className="md:w-1/3">
          <h4 className=" text-2xl font-bold text-white max-sm:text-xl max-sm:text-center max-sm:mt-10">
            FINANCIAL CALCULATORS ↘
          </h4>
          <CalculatorsBanner />
        </div>
      </div>
    </>
  );
};

export default PortfoliosBanner;
