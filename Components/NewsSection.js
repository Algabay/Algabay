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
      <div className="grid gap-8 grid-cols-1 px-24 my-6 pb-10">
        {data.map((value, index) => (
          <React.Fragment key={index}>
            <div className="flex bg-white border border-gray-300 p-6 rounded-lg shadow">
              {value.urlToImage && (
                <img
                  className="h-32 w-32 object-cover rounded-md shadow"
                  src={value.urlToImage}
                  alt={value.title}
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
