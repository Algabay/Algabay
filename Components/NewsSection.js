"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch news when the component mounts
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=70e6994d3ba24c2bb4b6631f73daa0a2"
        );
        setData(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    // Call the function to fetch news
    getNews();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  return (
    <>
      {/* Render your news cards */}
      <div className="grid gap-8 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-24 my-6">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              {/* 
              <img
                className="h-44 w-full object-cover rounded-md mb-4 shadow"
                src={value.urlToImage}
                alt={value.title}
              />*/}
              <div className="h-auto mb-5">
                <h6 className="text-md font-semibold mb-2">{value.title}</h6>
              </div>
              <div className="h-auto w-auto">
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default NewsSection;
