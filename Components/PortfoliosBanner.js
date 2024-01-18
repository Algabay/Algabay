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
      <div className="bg-white px-20 h-[85vh] w-full flex justify-between items-center">
        <div className=" ">
          <h4 className="text-[5rem] font-semibold text-gray-700 font-sans">
            Top stock selections <br />
            <span className="text-[4.5rem] bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-400">
              curated by AI
            </span>
          </h4>
          <h4 className="text-2xl text-gray-600 font-thin my-2">
            Discover AI curated top stock picks for precision and potential
          </h4>
          <button
            onClick={scroll}
            className="shadow-md bg-violet-100 px-20 font-light py-3 text-xl rounded-2xl my-5"
          >
            Explore Portfolios
          </button>
        </div>
        <div>
          <img src="/greenEnergy.png" className="h-[55vh]" alt="Green Energy" />
        </div>
      </div>

      <div
        ref={secondDivRef}
        className="bg-white h-[85vh] flex justify-around items-center w-full px-24"
      >
        <div className="h-auto w-[40%] bg-white rounded-3xl p-5 border  border-gray-300">
          <select
            name="stock"
            id="stock"
            className="w-full h-14  bg-sky-50 rounded-2xl text-xl font-light text-gray-700 text-center"
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
              className="h-auto w-full py-5 bg-purple-50 text-xl font-light text-gray-700  flex justify-center items-center rounded-2xl my-2"
            >
              {stock}
            </div>
          ))}
        </div>
        <div>
          <CalculatorsBanner />
        </div>
      </div>
    </>
  );
};

export default PortfoliosBanner;
