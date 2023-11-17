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
      <div className="grid gap-8 grid-cols-4 mx-12 my-4">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                className="h-48 w-full object-cover rounded-md mb-4"
                src={value.urlToImage}
                alt={value.title}
              />
              <h5 className="text-xl font-semibold mb-2">{value.title}</h5>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default NewsSection;
