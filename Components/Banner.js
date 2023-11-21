"use client";
import React from "react";
import WidgetBanner from "./WidgetBanner";

const Banner = () => {
  return (
    <div className="h-90 flex flex-row relative pt-24 pb-2">
      <div className="my-10 ml-10 first-letter: px-24 flex-grow">
        <h3 className="text-xl md:text-3xl text-gray-700 font-light lg:text-5xl mr-10">
          Simplified&nbsp;Investments
        </h3>

        <h3 className="text-xl md:text-3xl text-gray-700 font-light lg:text-5xl mt-4 mr-10">
          with AI
        </h3>

        <div className="my-7 text-md text-gray-500 mr-10">
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
          <h5 className="text-xl pt-4">Chat with Algabay GPT →</h5>
        </div>
        <button className="px-6 py-2 buttonColor rounded-lg hover:bg-blue-500">
          Coming soon
        </button>
      </div>
      <div className="mr-24 my-8 z-0">
        <WidgetBanner />
      </div>
    </div>
  );
};

export default Banner;
