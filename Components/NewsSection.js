"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsSection = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("business"); // Default category

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          `https://api.mediastack.com/v1/news?access_key=f78bc7636cbcfce62ecb4e4b57f0206c&categories=${category}&countries=in`
        );

        // Log the entire API response to inspect the data structure
        console.log("API Response:", response);

        // Update data state with articles
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        // Log or display more specific error information
      }
    };

    getNews();
  }, [category]);

  // Handler for category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="px-24 my-4 flex flex-col">
        <label
          htmlFor="news-category"
          className="text-lg font-semibold mb-2 text-gray-700"
        >
          Select News Category
        </label>
        <select
          id="news-category"
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-lg p-2 cursor-pointer hover:border-gray-400 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50"
        >
          <option value="general">General - Uncategorized News</option>
          <option value="business">Business - Business News</option>
          <option value="sports">Sports - Sports News</option>
          {/*<option value="entertainment">
            Entertainment - Entertainment News
          </option>
          <option value="health">Health - Health News</option>
          <option value="science">Science - Science News</option>

  <option value="technology">Technology - Technology News</option>*/}
        </select>
      </div>
      <div className="grid gap-8 grid-cols-1 px-24 my-6 pb-10">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex bg-white border border-gray-300 p-6 rounded-lg shadow"
          >
            {/* Use a default image if value.image is not available */}
            <img
              className="h-32 w-32 object-cover rounded-md shadow"
              src={value.image || "/newsLogo.png"}
              alt={value.title}
            />

            <div className="h-auto w-full py-4 px-8">
              <h6 className="text-md font-semibold mb-2">{value.title}</h6>
              {value.description && (
                <p className="text-gray-600">{value.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsSection;
