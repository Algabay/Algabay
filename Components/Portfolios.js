import React from "react";

const Portfolios = () => {
  return (
    <>
      <h4 className="ml-32 mt-10 text-3xl text-gray-600 font-sans font-light">
        Top AI Portfolios →
      </h4>
      <div className="container mx-auto">
        <div className="px-20 py-5">
          <div className="flex justify-between w-full h-72 p-10 align-middle rounded-lg">
            <div className="w-1/4 h-full bg-white shadow-md border border-gray-200 rounded-lg">
              <h4>High Divident Yeild</h4>
              <p>
                ONGC
                <br />
                NPTC
                <br />
                Indian Oil
                <br />
                RECLTD
                <br />
                Coal India
              </p>
            </div>
            <div className="w-1/4 h-full bg-white shadow-md border border-gray-200 rounded-lg"></div>
            <div className="w-1/4 h-full bg-white shadow-md border border-gray-200 rounded-lg"></div>
          </div>
          <div className="flex justify-evenly w-full h-72 p-10 align-middle rounded-lg">
            <div className="w-1/4 h-full bg-white shadow-md border border-gray-200 rounded-lg"></div>
            <div className="w-1/4 h-full bg-white shadow-md border border-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
