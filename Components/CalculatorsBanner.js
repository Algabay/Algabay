import React from "react";
import Link from "next/link";

const CalculatorsBanner = () => {
  return (
    <>
      <div className="bg-white w-full px-24 ">
        <div className="mx-20 mt-10 text-3xl text-gray-600 font-sans font-light">
          Financial Calculators →
        </div>
        <div className="flex justify-between px-20 py-10">
          <Link href="Interest">
            <div className="h-44 w-44 border border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out shadow-md">
              <h4 className="text-xl pt-1 text-gray-600">Interest</h4>
              <p className="text-xs text-center mt-1 text-gray-600">
                Compute interest for loans and savings
              </p>
              <img
                src="/calculatorImgs/1.png"
                className="h-14 max-sm:h-8 mt-2"
                alt="Calculator Image"
              />
            </div>
          </Link>

          <Link href="SipCalculator">
            <div className="h-44 w-44 border border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out shadow-md">
              <h4 className="text-xl pt-1 text-gray-600">SIP</h4>
              <p className="text-xs text-center mt-1 text-gray-600">
                Calculate your SIP investments easy
              </p>
              <img
                src="/calculatorImgs/4.png"
                className="h-14 max-sm:h-8 mt-2"
                alt="Calculator Image"
              />
            </div>
          </Link>
          <Link href="MfCalculator">
            <div className="h-44 w-44 border border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out shadow-md">
              <h4 className="text-xl pt-1 text-gray-600">MF</h4>
              <p className="text-xs text-center mt-1 text-gray-600">
                Check your mutual funds investment returns
              </p>
              <img
                src="/calculatorImgs/6.png"
                className="h-14 max-sm:h-8 mt-2"
                alt="Calculator Image"
              />
            </div>
          </Link>

          <div className="h-44 w-44 border border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out shadow-md">
            <h4 className="text-xl pt-1 text-gray-600">EMI</h4>
            <p className="text-xs text-center mt-1 text-gray-600">
              Calculate your EMI on your loans
            </p>
            <img
              src="/calculatorImgs/2.png"
              className="h-14 max-sm:h-8 mt-2"
              alt="Calculator Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorsBanner;
