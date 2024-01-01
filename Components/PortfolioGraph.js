import React from "react";

const PortfolioGraph = () => {
  return (
    <div className="container mx-auto my-10 px-10">
      <h4 className="text-3xl text-gray-800 font-sans font-light mb-8">
        Top AI Portfolios →
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {portfolios.map((portfolio, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md border border-gray-200 transition duration-500 ease-in-out transform hover:scale-105"
          >
            <div className="p-4">
              <div className="flex items-center mb-2">
                <h4 className="text-lg font-semibold text-blue-900">
                  {portfolio.title}
                </h4>
              </div>
              <ul className="text-gray-800">
                {Array.isArray(portfolio.stocks) ? (
                  portfolio.stocks.map((stock, i) => (
                    <li
                      key={i}
                      className={`mb-1 ${
                        // Check if the item is a phone number and apply additional styling
                        stock.includes("tel:") ? "font-bold text-lg" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: stock }}
                    />
                  ))
                ) : (
                  <li dangerouslySetInnerHTML={{ __html: portfolio.stocks }} />
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const portfolios = [
  {
    title: "High Dividend",
    stocks: ["ONGC", "NPTC", "Indian Oil", "RECLTD", "Coal India"],
  },
  {
    title: "Penny Stocks",
    stocks: [
      "Suzlon",
      "Yes Bank",
      "Triveni Glass",
      "Varanium Cloud",
      "Vikas Ecotech",
    ],
  },
  {
    title: "Strong FII Buying",
    stocks: [
      "Fortis HealthCare",
      "Federal Bank Ltd",
      "Dr Redd's Laboratory",
      "KPR",
      "Union Bank",
    ],
  },
  {
    title: "Multi Bagger",
    stocks: [
      "India Grid Trust",
      "JSW Holdings",
      "Max Health Care",
      "Varanium Cloud",
      "KPI Green",
    ],
  },
  {
    title: "High Growth",
    stocks: ["ITC", "BHEL", "Eicher Motors", "Mazagon", "IDFC LTD"],
  },
  {
    title: "Create your AI portfolio for free →",
    stocks:
      "<a href='tel:7010015467'>Call us at <span class='font-bold text-lg'>7010015467</span></a>",
  },
];

export default PortfolioGraph;
