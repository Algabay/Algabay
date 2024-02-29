import React, { useEffect, useState } from "react";
import axios from "axios";

const DummyNews = () => {
  const [data, setData] = useState([]);

  async function getNews() {
    try {
      const res = await axios.get(
        "https://alagaby-dummynews-api.vercel.app/news"
      );
      const news = await res.data.data;
      await setData(news);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  getNews();

  return (
    <>
      <div className="grid gap-8 grid-cols-1 mt-8 max-sm:px-6 px-24 py-8">
        <h4 className="text-2xl font-thin text-sky-400">TOP NEWS INSIGHTS ↘</h4>
        {data.map((news, index) => (
          <div
            key={index}
            className="sm:flex gap-10 max-sm:px-10 justify-between align-middle bg-white border border-gray-300 p-4 rounded-md shadow-md"
          >
            <img
              className="h-40 w-40 max-sm:h-16 max-sm:w-16 object-cover rounded-md mb-4 border border-gray-100"
              src="/newsLogo.png"
              alt=" :') "
            />
            <div className="h-auto w-full py-4">
              <h6 className="text-md font-semibold mb-2">{news.title}</h6>
              <p className="text-gray-600">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DummyNews;
