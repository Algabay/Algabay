"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const data = [
    {
      title:
        "Mukesh Ambani readying for a &#039;High Street&#039; fight with Tata, Max and Shoppers Stop?",
      description:
        "Primark is owned by London-listed Associated British Foods and runs over 400 stores globally.",
    },
    {
      title: "India Q3 GDP at 8.4%, beats estimates. Full details",
      description:
        "India's GDP growth for the third quarter (YoY) surpassed expectations, recording an actual rate of 8.4%, outperforming the anticipated 6.6%, and exceeding the previous quarter's 7.6%.",
    },
    {
      title:
        "At 3.6%, India&#039;s core sector growth hits 15-month low in January",
      description:
        "The index had grown by 4.9 per cent in December 2023 and 9.7 per cent in January 2023.",
    },
    {
      title:
        "Setback for Vedanta Group as SC turns down plea to reopen Sterlite Copper plant in TN",
      description:
        "The apex court said the plant was a chronic violator of air and water pollution laws.",
    },
    {
      title: "EPFO earns over Rs 13,500 crore from sale of ETFs in FY24",
      description:
        "According to sources, the EPFO received Rs 13,562.29 crore as income from the sale of ETFs between April 2023 and February 9 this year.",
    },
    {
      title:
        "Rs 1.26 lakh cr investment: Cabinet approves three more semiconductor units, including two by Tata",
      description:
        "All three units will start construction within the next 100 days. The chip programme was notified in December 2021 with a total outlay of Rs 76,000 crore.",
    },
    {
      title:
        "Shubman Gill meets Gujarat Titan teammate Robin Minz&#039;s father, on-duty at Ranchi airport",
      description:
        "Shubman Gill spent considerable time with Francis Xavier, who was on duty at the Ranchi airport.",
    },
    {
      title: "Top brewer AB InBev hikes dividend, but no new share buyback",
      description:
        "Anheuser-Busch InBev raised its annual dividend by 9% on Thursday, though analysts warned investors may be disappointed by the absence of a new share buyback and worse-than-expected U.S. sales.",
    },
    {
      title: "Samsung launches semiconductor R&amp;D facility in India",
      description:
        "The new campus of Samsung Semiconductor India Research (SSIR) features a modern, open-plan layout across four floors, encouraging collaboration and agility.",
    },
    {
      title:
        "Disney’s India valuation takes a big hit, down by over half post Reliance deal",
      description:
        "Post the Rs 70,352-crore JV with Reliance, what it does with its 36.84% holding will be interesting",
    },
    {
      title: "FDI inflows decline 13 pc to $ 32 billion in Apr-Dec 2023",
      description:
        "Foreign direct investment (FDI) inflows in India declined 13 per cent to $ 32.03 billion in April-December 2023, dragged down by lower infusion in computer hardware and software, telecom, auto, and pharma sectors, according to the latest government data.",
    },
    {
      title:
        "China rolls over $2 billion loan to Pakistan, finance minister says",
      description:
        "China has rolled over a $2 billion loan to Pakistan, caretaker finance minister Shamshad Akhtar confirmed in a response to Reuters on Thursday.",
    },
    {
      title:
        "World Bank to streamline loan, investment guarantees with $20 bln annual goal",
      description:
        "The World Bank Group said on Wednesday it would consolidate its loan and investment guarantee structure as part of its goal to triple its annual guarantees to $20 billion by 2030 to boost private renewable energy investments in developing countries.",
    },
    {
      title:
        "BHP to restructure some global corporate roles as it looks to trim costs",
      description:
        "The world's biggest listed miner BHP Group said on Thursday it was disbanding some global teams and transferring those roles covering functions including planning, environment and heritage protection to its mining asset-level management.",
    },
    {
      title: "Former Intel India head killed by speeding cab in an accident",
      description:
        "The police said on Thursday that Saini was cycling when the speeding cab hit him at around 5:50 am on Wednesday in Navi Mumbai township",
    },
    {
      title:
        "Paytm crisis: User complaints spiked at Paytm Payments Bank even before RBI action",
      description:
        "Paytm Payments Bank reported 66,751 complaints across various categories in the fiscal year ended March 31, 2023.",
    },
    {
      title:
        "GDP numbers out today: India&#039;s Q3 score may slide on poor farm sector show",
      description:
        "Economists and research agencies projected the growth to be anywhere between 6 to 6.8 per cent. While the RBI has projected growth to be 6.5 per cent, SBI research sees it in the range of 6.7-69%,",
    },
    {
      title:
        "Infosys plans walk-in recruitment drive in Bengaluru on March 9 to hire ‘next great talents’: Report ",
      description:
        "This is Infosys’ third recruitment drive after the one conducted in Hyderabad on January 6 and the one conducted in Chennai on February 3. ",
    },
    {
      title:
        "Logo and website of CII&#039;s &#039;Alliance for Global Good: Gender Equity and Equality&#039; launched",
      description:
        "The Alliance aims to bring together global good practices, knowledge sharing and investments in the field of women’s health, education, and enterprise and aligns with several Sustainable Development Goals (SDGs) including SDG 3 - Good Health and Well-Being; 4- Quality Education; 5 - Gender Equality and Empowerment; 17 - Global Partnership for Development and more, said a release by CII.",
    },
    {
      title:
        "It&#039;s official! Reliance signs binding merger with Walt Disney; full details here",
      description:
        "Reliance Industries, Viacom 18 Media, and Walt Disney partner up to create a joint venture merging Star India and Viacom18, with Reliance investing Rs 11,500 crore ($1.4 billion) into the new enterprise.",
    },
    {
      title:
        "Reliance Consumer partners with Elephant House to bring Sri Lankan beverage brand to India",
      description:
        "Elephant House is owned by Ceylon Cold Stores PLC, a subsidiary of John Keells Holdings PLC, Sri Lanka's largest listed conglomerate.",
    },
    {
      title:
        "Sunil Bharti Mittal first Indian to get Honorary Knighthood from King Charles III",
      description:
        "The KBE is among the highest honours conferred by the British Sovereign to civilians. It is awarded in an honorary capacity to foreign nationals",
    },
    {
      title: "45-day payment rule to MSMEs: FinMin looking at a possible tweak",
      description:
        "Concerns aired from multiple corners. A section of MSMEs worry that this may impact relations with suppliers and buyers, others say their systems are not ready for this provision.",
    },
    {
      title:
        "Historic drug bust: 3,300 kg of charas, meth seized off Gujarat coast",
      description:
        "An Indian Navy mission-deployed ship which was at sea for two days stopped the suspicious boat as it entered Indian territorial waters, inputs from a a surveillance aircraft showed.",
    },
  ];
  return (
    <>
      <div className="grid gap-8 grid-cols-1 mt-8 max-sm:px-6 px-24 py-8">
        <h4 className=" text-2xl font-thin text-sky-400">
          TOP NEWS INSIGHTS ↘
        </h4>
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
