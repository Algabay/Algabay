import { Bungee_Outline } from "next/font/google";
import React, { useRef } from "react";

const PortfoliosBanner = () => {
  const secondDivRef = useRef(null);

  function scroll() {
    secondDivRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="bg-white px-20 h-[80vh] w-full flex justify-between items-center">
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
          <img src="/greenEnergy.png" className="h-[55vh]" />
        </div>
      </div>
      <div ref={secondDivRef} className="bg-white h-screen w-full px-16 pt-20">
        <div className="h-full w-full bg-blue-100 rounded-3xl flex p-10 gap-10">
          <div className="h-full w-[40%] bg-white rounded-3xl p-4">
            <form>
              <input
                type="number"
                placeholder="enter ammount"
                className="w-full h-10 px-4 bg-gray-100 rounded-full"
              />
            </form>
          </div>

          <div className="h-full w-full flex flex-col co justify-between">
            <div className="h-[20%] w-full bg-white rounded-2xl"></div>
            <div className="h-[20%] w-full bg-white rounded-2xl"></div>
            <div className="h-[20%] w-full bg-white rounded-2xl"></div>
            <div className="h-[20%] w-full bg-white rounded-2xl"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfoliosBanner;
