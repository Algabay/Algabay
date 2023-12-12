"use client";
import React from "react";
import WidgetBanner from "./WidgetBanner";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="h-auto flex flex-row relative pt-24 pb-2 px-20 max-sm:inline-block max-sm:px-1 ">
      <div className="my-8 ml-16 mt-16 flex-grow max-sm:mt-12 max-sm:mx-2 max-sm:border max-sm:border-gray-200 rounded-md max-sm:px-5 ml-6">
        <div className="text-5xl text-gray-700 font-light max-sm:text-2xl max-sm:text-center max-sm:mt-3">
          <h3>
            Simplify&nbsp;Investments
            <br /> <span className="text-4xl max-sm:text-xl">with AI</span>
          </h3>
        </div>

        <div className="my-7 text-md text-gray-500 max-sm:text-sm max-sm:mr-0 max-sm:text-center">
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
          <h5 className="text-xl pt-4 max-sm:text-sm max-sm:-mt-4 max-sm:mb-3">
            Chat For Free with Algabay GPT →
          </h5>
          <button className="px-6 py-3 buttonColor rounded-lg hover:bg-blue-500 mt-4"><Link href="/Home">
            Coming Soon
            </Link></button>
          
    
        </div>
      </div>
      <div className="my-8 z-[-2px] h-auto max-sm:content-center max-sm:mx-4 style={{media}} ">
        <div className="mx-2">
          <WidgetBanner />
        </div>
      </div>
    </div>
  );
};

export default Banner;
