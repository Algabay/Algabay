import React, { useRef, useState } from "react";
import CalculatorsBanner from "./CalculatorsBanner";

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
      {/* Section 1: Top Stock Selections */}
      <div className="bg-white px-5 md:px-24 h-full w-full flex flex-col md:flex-row justify-between items-center py-16 max-sm:py-4">
        <div className="md:w-2/3 text-center md:text-left md:m-5">
          <h4 className="text-7xl max-sm:text-4xl font-semibold text-gray-700 font-sans my-5">
            Top stock selections <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-400">
              curated by AI
            </span>
          </h4>
          <h4 className="text-xl md:text-2xl text-gray-600 font-thin my-2">
            Discover AI curated top stock picks for precision and potential
          </h4>
          <button
            onClick={scroll}
            className="shadow-md bg-violet-100 px-8 md:px-20 font-light py-3 text-lg md:text-xl rounded-2xl my-5 mx-auto md:mx-0 block"
          >
            Explore Portfolios
          </button>
        </div>
        <div className="md:w-1/3">
          <img
            src="/greenEnergy.png"
            className="h-[40vh] md:h-[55vh] w-full object-cover my-5"
            alt="Green Energy"
          />
        </div>
      </div>

      {/* Section 2: Stock Selection Dropdown */}
      <div
        ref={secondDivRef}
        className="bg-white h-full flex flex-col md:flex-row justify-around items-center w-full px-4 md:px-24 py-16 max-sm:py-4"
      >
        <div className="h-auto w-full md:w-[40%] bg-white rounded-3xl p-4 md:p-5 border border-gray-300">
          <select
            name="stock"
            id="stock"
            className="w-full h-14 bg-sky-50 rounded-2xl text-lg md:text-xl font-light text-gray-700 text-center"
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
              className="h-auto w-full py-3 md:py-5 bg-purple-50 text-lg md:text-xl font-light text-gray-700 flex justify-center items-center rounded-2xl my-2"
            >
              {stock}
            </div>
          ))}
        </div>
        <div className="md:w-1/3">
          <h4 className=" text-2xl font-thin text-lime-400 max-sm:text-xl max-sm:text-center max-sm:mt-10">
            FINANCIAL CALCULATORS ↘
          </h4>
          <CalculatorsBanner />
        </div>
      </div>
    </>
  );
};

export default PortfoliosBanner;
