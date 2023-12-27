"use client";
import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const MutualFundsCalculator = () => {
  const [initialValue, setInitialValue] = useState("");
  const [endingValue, setEndingValue] = useState("");
  const [distributions, setDistributions] = useState("");
  const [totalReturn, setTotalReturn] = useState(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Update chart whenever totalReturn changes
    updateChart();
  }, [totalReturn]);

  const calculateTotalReturn = () => {
    const initial = parseFloat(initialValue);
    const ending = parseFloat(endingValue);
    const distribution = parseFloat(distributions);

    if (isNaN(initial) || isNaN(ending) || isNaN(distribution)) {
      setTotalReturn("Please enter valid numbers for all fields.");
      return;
    }

    const totalReturnPercentage =
      ((ending - initial + distribution) / initial) * 100;
    setTotalReturn(`Total Return: ${totalReturnPercentage.toFixed(2)}%`);
  };

  const updateChart = () => {
    // Access the canvas element
    const ctx = document.getElementById("mutualFundsChart");

    // Destroy the existing chart if any
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Draw a new chart
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Initial Investment", "Ending Value", "Distributions"],
        datasets: [
          {
            data: [
              parseFloat(initialValue),
              parseFloat(endingValue),
              parseFloat(distributions),
            ],
            backgroundColor: ["#6ffcaa", "#279cf5", "#ffc107"],
          },
        ],
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">
        Mutual Funds Investment Calculator
      </h2>

      <div className="flex space-x-4">
        <label>
          Initial Investment:
          <input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
            className="border p-2 mt-1 w-full rounded-lg"
          />
        </label>

        <label>
          Ending Value:
          <input
            type="number"
            value={endingValue}
            onChange={(e) => setEndingValue(e.target.value)}
            className="border p-2 mt-1 w-full rounded-lg"
          />
        </label>

        <label>
          Distributions:
          <input
            type="number"
            value={distributions}
            onChange={(e) => setDistributions(e.target.value)}
            className="border p-2 mt-1 w-full rounded-lg"
          />
        </label>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={calculateTotalReturn}
      >
        Calculate
      </button>

      <div className="flex justify-center mt-6">
        <div className="w-full max-w-screen-lg border border-gray-300 shadow-lg p-10 rounded-lg flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 md:pr-8">
            <h2 className="text-2xl font-light text-gray-700 mb-2">Result:</h2>
            <div className="w-full h-20 border border-gray-400 flex justify-around">
              <p className="text-md font-light text-gray-600">
                {totalReturn ? totalReturn : ""}
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="border border-gray-800 rounded-xl overflow-hidden p-10">
              <canvas id="mutualFundsChart" width="auto" height="auto"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundsCalculator;
