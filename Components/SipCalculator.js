"use client";
import React, { useState } from "react";

const SipCalculator = () => {
  // State to manage input values
  const [principal, setPrincipal] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [ammount, setAmmount] = useState(null);
  const [interestTotal, setInterestTotal] = useState(null);

  // Function to calculate SIP maturity amount
  const calculateSIP = () => {
    const P = parseFloat(principal);
    const i = parseFloat(rateOfInterest) / 1200; // Monthly interest rate
    const n = parseFloat(time) * 12;

    const M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);

    setResult(M.toFixed(2));

    const investmentAmount = P * n;
    setAmmount(investmentAmount.toFixed(2));

    const interest = M - investmentAmount;
    setInterestTotal(interest.toFixed(2));
  };

  return (
    <div className="h-[80vh] w-full bg-green-200 p-4">
      <h1 className="text-3xl font-bold mb-4">SIP Calculator</h1>
      <div className="mb-4">
        <label className="block">
          Principal Amount:
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="border p-2 mt-1 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          Rate of Interest (%):
          <input
            type="number"
            value={rateOfInterest}
            onChange={(e) => setRateOfInterest(e.target.value)}
            className="border p-2 mt-1 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          Years:
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border p-2 mt-1 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <button
          onClick={calculateSIP}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Calculate
        </button>
      </div>
      {result && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Result:</h2>
          <p>
            Amount you receive upon maturity: {result},<br /> investment amount
            is: {ammount} <br />
            interest total is: {interestTotal}
          </p>
        </div>
      )}
    </div>
  );
};

export default SipCalculator;
