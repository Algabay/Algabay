// "use client";
import React from "react";
import WidgetBanner from "./WidgetBanner";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start max-sm:p-4 pt-12 max-sm:pt-32">
      <div className="flex flex-col items-center lg:items-start rounded-md p-6 lg:w-1/2 mt-5 mx-24">
        <div className="text-center lg:text-left">
          <h3 className="text-5xl text-gray-700 max-sm:text-3xl">
            Simplify Investments
            <br />{" "}
            <span className="text-4xl textColor max-sm:text-3xl">with AI</span>
          </h3>
        </div>

        <div className="mt-7 text-md text-gray-600 max-sm:text-sm">
          <h5 className="my-2">
            ✔ Get AI Summaries for Instant Market overview.
          </h5>
          <h5 className="my-2">✔ Chat with our LLM-powered Finance ChatBot.</h5>
          <h5 className="my-2">
            ✔ Stay ahead of the market with market updates.
          </h5>
          <h5 className="mb-2">
            {" "}
            ✔ Optimize your Portfolio with AI Suggestions.
          </h5>
          <div className="text-center lg:text-left">
            <h5 className="text-xl pt-3 pb-3 text-gray-600 max-sm:text-sm">
              ✔ TRY ALGABAY GPT FOR FREE →
            </h5>

            <Link href="/Home">
              <button className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 my-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-4 lg:ml-8 lg:w-1/2 mx-24">
        <WidgetBanner />
      </div>
    </div>
  );
};

export default Banner;
