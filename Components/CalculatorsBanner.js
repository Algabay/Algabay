import React from "react";
import Link from "next/link";

const CalculatorCard = ({ href, title, description, imageSrc }) => {
  return (
    <Link href={href}>
      <div className="w-48 h-48 max-sm:w-32 max-sm:h-32 bg-white rounded-xl flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-xl transition duration-300 ease-in-out shadow-md m-10 border border-gray-100">
        <h4 className="text-lg text-gray-700">{title}</h4>
        <p className="text-sm text-center mt-1 text-gray-600">{description}</p>
        <img
          src={imageSrc}
          className="h-16 max-sm:h-10 mt-2"
          alt={`${title} Calculator Image`}
        />
      </div>
    </Link>
  );
};

const CalculatorsBanner = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-[90vh] justify-center items-center px-4 py-4 max-sm:grid max-sm:grid-cols-2 max-sm:gap-4 rounded-xl">
      <div className="flex flex-col items-center justify-center">
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
      </div>
      <div className="flex flex-col items-center justify-center">
        <CalculatorCard
          href="MfCalculator"
          title="Mutual Fund"
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
