"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsSection = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("business"); // State for selected category

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          //`http://api.mediastack.com/v1/news?access_key=f78bc7636cbcfce62ecb4e4b57f0206c&categories=${category}`
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=70e6994d3ba24c2bb4b6631f73daa0a2`
        );
        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, [category]); // Depend on category state

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
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className="grid gap-8 grid-cols-1 px-24 my-6 pb-10">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <div className="flex bg-white border border-gray-300 p-6 rounded-lg shadow">
              {value.image ? (
                <img
                  className="h-32 w-32 object-cover rounded-md shadow"
                  src={value.image}
                  alt={value.title}
                />
              ) : (
                <img
                  className="h-32 w-32 object-cover rounded-md shadow"
                  src="/newsLogo.png"
                  alt="News Logo"
                />
              )}

              <div className="h-auto w-full py-4 px-8">
                <h6 className="text-md font-semibold mb-2">{value.title}</h6>
                {value.description && (
                  <p className="text-gray-600">{value.description}</p>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default NewsSection;
