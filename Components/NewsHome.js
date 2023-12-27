import React, { useState, useEffect } from "react";
import axios from "axios";

const NewsHome = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("business");

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          `https://api.mediastack.com/v1/news?access_key=f78bc7636cbcfce62ecb4e4b57f0206c&countries=in&keywords=${category}&limit=${100}`
        );

        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, [category]);

  const isValidURL = (url) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const getImageUrl = (article) => {
    if (isValidURL(article.image)) {
      return article.image;
    }

    if (
      Array.isArray(article.image) &&
      article.image.length > 0 &&
      isValidURL(article.image[0])
    ) {
      return article.image[0];
    }

    return "/newsLogo.png";
  };

  return (
    <div className="container mx-auto">
      <div className="px-24 max-sm:px-16 my-4 flex flex-col">
        <label
          htmlFor="news-category"
          className="text-lg font-semibold mb-2 text-gray-700 max-sm:text-sm"
        >
          Select News Category
        </label>
        <select
          id="news-category"
          value={category}
          onChange={handleCategoryChange}
          className="border border-gray-300 rounded-lg p-2 cursor-pointer hover:border-gray-400 focus:ring-2 focus:ring-indigo-200 transition-all bg-gray-50 max-sm:text-sm"
        >
          <option value="stock">Business News</option>
          <option value="technology">Technology News</option>
          <option value="scinece">Science News</option>
        </select>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-8 max-sm:px-6">
        {data.map((value, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 p-4 rounded-md shadow-md"
          >
            <img
              className="h-44 w-full max-sm:h-24 max-sm:w-24  object-cover rounded-md mb-4 border border-gray-100"
              src={getImageUrl(value)}
              alt={value.title}
            />
            <div>
              <h6 className="text-md font-semibold mb-2">{value.title}</h6>
              {value.description && (
                <p className="text-gray-600 text-sm">{value.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
