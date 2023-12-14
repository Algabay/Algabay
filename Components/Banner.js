"use client";
import React from "react";
import WidgetBanner from "./WidgetBanner";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="flex flex-col items-center max-sm:p-4 pt-32 max-sm:pt-44">
      <div className="flex flex-col items-center rounded-md p-6 max-sm:w-full">
        <div className="text-center">
          <h3 className="text-8xl text-gray-700 max-sm:text-4xl">
            Simplify Investments
            <br /> <span className="text-7xl max-sm:text-3xl textColor">with AI</span>
          </h3>
        </div>

        <div className="mt-7 text-xl text-gray-600 max-sm:text-sm">
          <h5 className="my-2">
            ✔ Get AI Summaries for Instant Market overview.<br className="sm:hidden"></br> ✔ Chat with our LLM-powered Finance ChatBot.
          </h5>
          <h5 className="my-2"></h5>
          <h5 className="my-2">
            ✔ Stay ahead of the market with market updates.<br className="sm:hidden"></br> ✔ Optimize your Portfolio with AI Suggestions.
          </h5>
          <h5 className="mb-2">
            
          </h5>
          <div className="text-center"> {/* Added flex and justify-center */}
            <h5 className="text-xl pt-2 pb-3 text-gray-600 max-sm:text-sm">
              ✔ TRY ALGABAY GPT FOR FREE →
            </h5>
            <Link href="/Home"><button className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 my-2">
              Get Started
            </button></Link>
            
          </div>
          
        </div>
      </div>

      <div className="mt-4">
        <WidgetBanner />
      </div>
    </div>
  );
};

export default Banner;
