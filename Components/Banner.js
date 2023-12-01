"use client";
import React from "react";
import WidgetBanner from "./WidgetBanner";

const Banner = () => {
  return (
    <div className="h-auto flex flex-row relative pt-24 pb-2 px-20 max-sm:inline-block max-sm:px-2 ">
      <div className="my-8 flex-grow max-sm:mt-12 max-sm:mx-4 max-sm:border max-sm:border-gray-200 rounded-md max-sm:px-7 ml-6">
        <div className="text-5xl text-gray-700 font-light max-sm:text-xl max-sm:text-center">
          <h3>
            Simplify&nbsp;Investments
            <br /> <span className="text-4xl max-sm:text-xl">with AI</span>
          </h3>
        </div>

        <div className="my-7 text-md text-gray-500 max-sm:text-xs max-sm:mr-0 max-sm:text-center">
          <h5 className="my-2">
            ✔ Get AI Summaries for Instant Market overview.
          </h5>
          <h5 className="my-2">✔ Chat with our LLM-powered Finance ChatBot.</h5>
          <h5 className="my-2">
            ✔ Stay ahead of the market with market updates.
          </h5>
          <h5 className="mb-6">
            ✔ Optimize your Portfolio with AI Suggestions.
          </h5>
          <h5 className="text-xl pt-4 max-sm:text-sm">Chat with Algabay GPT →</h5>
        </div>
        <button className="px-6 py-2 buttonColor rounded-lg hover:bg-blue-500 max-sm:mx-8 max-sm:mb-2">
          Coming soon
        </button>
      </div>
      <div className="my-8 z-[-2px] h-auto w-[275px]  max-sm:mx-5">
        <WidgetBanner />
      </div>
    </div>
  );
};

export default Banner;
