"use client";
import React from "react";
import WidgetBanner from "./WidgetBanner";

const Banner = () => {
  return (
    <>
      <div className="flex relative">
        <div className="h-auto w-auto ml-32  flex-row relative pt-24 pb-2 my-10 first-letter:px-24 flex-grow max-sm:h-32 max-sm:ml-[80px] max-sm:mt-16">
          {/* Remove max-sm:hidden from the above line */}
          <div className=" max-sm:text-center">
            <h3 className="text-xl md:text-3xl text-gray-700 font-light lg:text-5xl mr-10 max-sm:mr-4  ">
              Simplify&nbsp;Investments
            </h3>

            <h3 className="text-xl md:text-3xl text-gray-700 font-light lg:text-5xl mt-4 mr-10 max-sm:mt-0">
              with AI
            </h3>
          </div>

          <div className="my-7 text-md text-gray-500 mr-10 max-sm:text-xs max-sm:mr-0 max-sm:text-center">
            <h5 className="my-2">
              ✔ Get AI Summaries for Instant Market overview.
            </h5>
            <h5 className="my-2">
              ✔ Chat with our LLM-powered Finance ChatBot.
            </h5>
            <h5 className="my-2">
              ✔ Stay ahead of the market with market updates.
            </h5>
            <h5 className="mb-6">
              ✔ Optimize your Portfolio with AI Suggestions.
            </h5>
            <h5 className="text-xl pt-4 max-sm:text-sm max-sm:-mt-2">Chat with Algabay GPT →</h5>
          </div>
          <button className="px-6 py-2 buttonColor rounded-lg hover:bg-blue-500 max-sm:text-sm max-sm:ml-7 ">
            Coming soon
          </button>
        </div>
        <div className="flex justify-center px-12">
          <div className="mr-20 mt-36 max-sm:mt-[600px] max-sm:-ml-[275px] ">
            <WidgetBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
