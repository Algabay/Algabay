import React from "react";
import Link from "next/link";

const CalculatorCard = ({ href, title, description, imageSrc }) => {
  return (
    <Link href={href}>
      <div className="h-44 w-44 max-sm:h-40 max-sm:w-40 border border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out shadow-md">
        <h4 className="text-xl pt-1 text-gray-600">{title}</h4>
        <p className="text-xs text-center mt-1 text-gray-600">{description}</p>
        <img
          src={imageSrc}
          className="h-14 max-sm:h-8 mt-2"
          alt={`${title} Calculator Image`}
        />
      </div>
    </Link>
  );
};

const CalculatorsBanner = () => {
  return (
    <div className="bg-white w-full px-4 sm:px-8 lg:px-24">
      <div className="mx-4 sm:mx-8 mt-6 text-3xl text-gray-600 font-sans font-light">
        Financial Calculators →
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-8 py-4 sm:py-10 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4">
        <CalculatorCard
          href="Interest"
          title="Interest"
          description="Compute interest for loans and savings"
          imageSrc="/calculatorImgs/1.png"
        />

        <CalculatorCard
          href="SipCalculator"
          title="SIP"
          description="Calculate your SIP investments easily"
          imageSrc="/calculatorImgs/4.png"
        />

        <CalculatorCard
          href="MfCalculator"
          title="MF"
          description="Check your mutual funds investment returns"
          imageSrc="/calculatorImgs/6.png"
        />

        <CalculatorCard
          href="EMI"
          title="EMI"
          description="Calculate your EMI on your loans"
          imageSrc="/calculatorImgs/2.png"
        />
      </div>
    </div>
  );
};

export default CalculatorsBanner;
