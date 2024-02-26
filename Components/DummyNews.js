"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const data = [
    {
      title:
        "Govt committee likely to finalise startup regulatory framework within 2 months amid Paytm, Byju’s&#039; concerns",
      description:
        "The Company Law Committee, a government-appointed panel, convened last month and is expected to meet again soon to finalize a regulatory framework for large unlisted startups.",
    },
    {
      title: "Here’s what the Household Consumption Expenditure Survey means",
      description:
        "This will help in long pending rejig the consumer price index; but experts say that exercise may take some more time",
    },
    {
      title:
        "Anant Ambani-Radhika Merchant wedding: Check out invitation, pre-wedding events, themes and more",
      description:
        "The details of the three-day event were shared by the hospitality team behind the mega event. Check this space for more",
    },
    {
      title:
        "Goldman Sachs, Mubadala sign $1 bln private credit Asia-Pacific partnership deal",
      description:
        "Goldman Sachs and Abu Dhabi's sovereign wealth fund Mubadala have struck a $1 billion deal.",
    },
    {
      title:
        "Reliance, Walt Disney sign deal to merge their media operations: Report",
      description:
        "Reliance-Disney deal: The stake split between the partners may change, depending on how Disney’s other local assets are factored at the time of closing of the deal.",
    },
    {
      title:
        "‘Too early’: Paytm’s advisory panel chief M Damodaran on identifying issues with fintech firm ",
      description:
        "While responding to a question w.r.t. RBI’s January 31 order on Paytm Payments Bank Limited and its impact on Paytm, Damodaran said at this point, the firm is dealing with the RBI.",
    },
    {
      title:
        "Paytm issue may be reviewed, scrutiny on Byju&#039;s progressing well: ICAI",
      description:
        "On January 31, the RBI prohibited Paytm Payments Bank Limited from accepting deposits or top-ups in any customer account, including wallets and FASTags, effective from February 29.",
    },
    {
      title:
        "Indian journalist succumbs to fire incident in Manhattan residential building",
      description:
        "The fire, which injured approximately 17 people, occurred in a six-story residential building at 2 St. Nicholas Place in Harlem.",
    },
    {
      title:
        "Reliance, Disney sign binding merger pact, RIL to own 61% in merged entity: Report",
      description:
        "As per the pact, the media unit of Reliance and its affiliates are expected to own at least 61 per cent in the merged entity, with Disney holding the rest.",
    },
    {
      title: "Magnitude 5.8 earthquake hits China&#039;s Xinjiang region",
      description:
        "The earthquake occurred at a depth of 11 km (6.84 miles), CENC reported. As of 1:00 p.m., Xinhua, citing local authorities, reported no casualties or collapsed houses, noting that the areas surrounding the epicentre are sparsely populated.",
    },
    {
      title:
        "Employee quits instantly after boss says f*** off, post goes viral",
      description:
        "In the post, the user explained that they were working from home and had contacted their boss for support with a new computer.",
    },
    {
      title:
        "&#039;Unemployment is not the problem...&#039;: Arvind Panagariya on what it&#039;ll take to beat China",
      description:
        "Panagariya sounded optimistic that the jobs problem in the country will be solved over the next 10 years.",
    },
    {
      title:
        "&#039;16 years ago today!...&#039;: 2008 IPL Auctioneer recalls MS Dhoni&#039;s and Warne&#039;s bids, post goes viral",
      description:
        "The photo showed an auction sheet that included names of key players like MS Dhoni and Shane Warne.",
    },
    {
      title:
        "&#039;To Amir, the real hero. Keep inspiring!&#039;: Sachin Tendulkar gifts signed bat to Para Cricketer Amir Lone",
      description:
        "Tendulkar invited Lone to his hotel room, gifted him a signed bat, and posted a video of their interaction on his social media handle with a heartfelt caption.",
    },
    {
      title:
        "IndiGo passenger discovers cockroaches in food section, airline responds after video goes viral",
      description:
        "The incident was brought to light by journalist Tarun Shukla, who shared a video of the unsanitary conditions on social media. ",
    },
    {
      title:
        "Rajya Sabha elections: 36% Upper House candidates have criminal cases registered against them: ADR report",
      description:
        "As per the ADR report, 8 out of 30 BJP candidates, 6 out of 9 Congress candidates have declared criminal cases against themselves in their affidavits.",
    },
    {
      title:
        "Anant Ambani-Radhika Merchant pre-wedding festivities: Check details about dress codes, themed nights and travel plans for guests",
      description:
        "Each day is themed, with 'An Evening in Everland', 'A Walk on the Wildside', and 'Mela Rouge' being the themes for the first three days.",
    },
    {
      title:
        "UAE dropped from financial crime watch list of high-risk money flow countries; here&#039;s what it means",
      description:
        "The Financial Action Task Force (FATF), a body that groups countries from the United States to China to tackle financial crime, on Friday dropped the UAE from its 'grey list' of around two dozen nations considered risky.",
    },
    {
      title:
        "Will India become the world’s largest economy by 2075? Here’s what financial experts say",
      description:
        "While sharing his views at Anmi’s 13th International Convention 2024, Kansal said that India’s growth is phenomenal.",
    },
    {
      title:
        "Adhir Chowdhury of Congress ‘biggest obstacle&#039; in seat sharing deal, say Trinamool sources",
      description:
        "On Friday, the Congress said that the seat-sharing talks between the party and Trinamool were back on the table for the Lok Sabha elections in April-May.",
    },
    {
      title:
        "Exploring the spiritual and architectural marvels of Khajuraho Temples: Beyond erotic sculptures",
      description:
        "In recent years, concerted efforts have been made to preserve and protect the Khajuraho Temples for future generations.",
    },
    {
      title:
        "Indian remain poor because they are generating lower returns than inflation: Nilesh Shah, Kotak Mahindra AMC",
      description:
        "Sharing his views on investment trends, Shah shared that around 10 crore individuals are losing money while playing fantasy games, nearly 2 crore Indians have lost more than Rs 2 lakh crore in Ponzi schemes.",
    },
    {
      title:
        "Vested interests at play: Zee says taking all steps to protect interest of its shareholders",
      description:
        "Zee Entertainment Enterprises on Friday constituted an independent advisory committee headed by Satish Chandra, retired judge of Allahabad High Court, to curb erosion of its investor wealth in the wake of speculations, leading to negative public opinion of the company.",
    },
    {
      title: "Vellayan Subbiah awarded EY Entrepreneur of the Year 2023",
      description:
        "Vellayan Subbiah will represent India at the EY World Entrepreneur of the Year Award in Monte Carlo from June 4-7",
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
