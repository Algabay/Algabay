import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "&#039;The staff has no clue&#039;: Actor Radhika Apte faces distress with no water or toilet access at airport",
      description:
        "Radhika Apte took to Instagram to share her distressing experience, posting videos and images that captured the predicament of the passengers who were locked in without any access to basic amenities.",
    },
    {
      title:
        "Ex-model Divya Pahuja&#039;s body recovered from Haryana canal after accused&#039;s confession: Police",
      description:
        "The body of ex-model Divya Pahuja was retrieved from a canal in Tohna, Haryana, by Gurugram Police. On January 2, she was murdered in a hotel under dubious circumstances.",
    },
    {
      title:
        "&#039;Precision &amp; Excellence&#039;: Anand Mahindra awe-inspired by IAF jets performing aerial ballet in Mumbai",
      description:
        "The air show, which took place from January 12 to January 14 between 12 pm to 1 pm over Marine Drive, was part of a collaboration between the IAF and the Government of Maharashtra. ",
    },
    {
      title:
        "Start-ups and corporate governance: Here’s why buck stops with the investors",
      description:
        "Investors, especially those on an institutional level, are obligated to take on the role of active owners. This includes engaging with the companies they invest in, utilising their voting rights, and participating in shareholder meetings.",
    },
    {
      title:
        "Grand celebrations across US, billboards displaying Ram Mandir put up in 10 US states ahead of inauguration",
      description:
        "To mark the inauguration of the Ram Temple in Ayodhya, the Hindu American community throughout the US has organised several car rallies and has planned additional events leading up to the 'Pran Pratishtha' in Ayodhya.",
    },
    {
      title:
        "&#039;Lot of Indian edtech firms tried to do it all themselves,&#039; says Coursera CEO amid Byju&#039;s shrinking valuations: Report",
      description:
        "'Every time I came to India, everyone was saying 'You are going to get swallowed by Byju's',' reminisced Coursera CEO Jeff Maggioncalda",
    },
    {
      title: "HDFC Life Q3 net profit soars 16% to Rs 365 cr amid market surge",
      description:
        "Despite a modest 6 per cent increase in net premium income to Rs 15,273 crore, the company faced challenges selling high-value policies following new taxation introduced in the last Budget.",
    },
    {
      title:
        "&#039;Even I work more than 70 hours at this age...&#039;: Sudha Murty backs husband Narayana Murthy",
      description:
        "The Infosys founder's wife, while supporting his 70-hour work week remark, said that even she works more than 70 hours and one should find joy and passion in doing their work",
    },
    {
      title:
        "Wipro headcount declines for 5th straight quarter, attrition falls to 10-quarter low",
      description:
        "On suing former executives who left to join rivals, MD & CEO Thierry Delaporte says there are legal obligations to be kept by employees, which is the case across industries.  ",
    },
    {
      title:
        "Budget 2024: Goldman Sachs says Centre may peg fiscal deficit for FY25 at 5.3%",
      description:
        "Interim Budget: Goldman Sachs said the Centre has been able to achieve robust tax collection, primarily through direct taxes in FY24. This has provided the government with some fiscal room to increase spending while still meeting the fiscal deficit target of 5.9 per cent of GDP.",
    },
    {
      title:
        "PM Modi opens Atal Setu, India’s longest sea bridge, to reduce Mumbai-Navi Mumbai commute to 20 mins from 2 hours",
      description:
        "Prime Minister Narendra Modi opened the Mumbai Trans Harbour Link (MTHL), the country's longest sea bridge, which would shorten travel time between South Mumbai and Navi Mumbai.",
    },
    {
      title:
        "OpenAI CEO Sam Altman ties knot with longtime partner Oliver Mulherin",
      description:
        "As news of their marriage started circulating on social media, with speculation and intrigue, some even humorously questioned whether the wedding images are AI-generated",
    },
    {
      title:
        "Veranda Learning to acquire 50% stake in Tapasya Education Institutions, stock up by 2%",
      description:
        "Last year, Veranda Learning Solutions acquired seven businesses through its wholly-owned subsidiary Veranda Administrative Learning Solutions Pvt Ltd at a total valuation of over Rs 400 crore.",
    },
    {
      title:
        "Deal activity in India, China, other APAC economies dip 20.4% in 2023: GlobalData",
      description:
        "All major markets in the APAC region saw a decrease in deal activity. China, India, Japan, Australia, South Korea, Singapore, Hong Kong, Indonesia, and New Zealand, stated GlobalData.",
    },
    {
      title: "Govt working with states on upward growth of MSMEs",
      description:
        "MSME secretary says focus to grow nano enterprises with new schemes.",
    },
    {
      title:
        "Kia launches Sonet 2024 facelift in India with prices starting from Rs 7.99 lakh: Check variants, features, other details",
      description:
        "Kia has launched the Sonet facelift, with prices ranging from Rs 7.99 lakh to Rs 15.69 lakh. The compact SUV features mild cosmetic changes, feature additions, and continues with the same set of engines and powertrains.",
    },
    {
      title:
        "Lohri on January 13 or 14? Date, significance, history. Everything you need to know",
      description:
        "According to the Drik Panchang, Makar Sankranti will fall on January 15, making Lohri fall on January 14. In some parts of Punjab, celebrations may occur on January 13.",
    },
    {
      title:
        "Suchana Seth case: Note written with eyeliner found in bag with 4-yr old son’s body",
      description:
        "Bengaluru CEO Suchana Seth had written a note with eyeliner stating that custody of her 4-year old son should remain with her, irrespective of court's order.",
    },
    {
      title:
        "LIC slapped with two I-T demand notices amounting to Rs 3,529 crore",
      description:
        "In an exchange filing, LIC clarified that there is no material impact on financials, operations or other activities of the corporation due to these orders.",
    },
    {
      title:
        "Divya Pahuja murder: One accused held at Kolkata airport days after police issued look-out circulars",
      description:
        "Divya Pahuja, an accused in the alleged fake encounter of dreaded gangster Sandeep Gadoli, was out on bail after spending seven years in prison. She was killed on January 2.",
    },
    {
      title:
        "Delhi fog: Delhi airport reports zero visibility at 7:30 am; no significant change expected for next 2 hours",
      description:
        "Delhi weather: On Thursday, Delhi registered a minimum temperature of 5.8 degrees Celsius, two degrees below normal. The maximum temperature was 18.1 degrees Celsius, also two degrees below normal. ",
    },
    {
      title:
        "Ayodhya Ram temple inauguration: ‘BJP can’t give certificate of good or bad Hindu,’ says Congress’ Sachin Pilot",
      description:
        "Ayodhya Ram temple inauguration: Congress' Sachin Pilot emphasised that religion is a personal choice and that the BJP has no authority to categorise any Hindu as good or bad.",
    },
    {
      title:
        "Pakistan gets a $700 million bailout cheque from IMF after &#039;reform review&#039;",
      description:
        "A mission from the Washington-based global lender reviewed the country’s economic performance during the first three months of the fiscal year – from July to September, 2023.",
    },
    {
      title:
        "Vivek Ramaswamy: &#039;BRICS&#039; common currency could be a major problem for US, govt must...&#039;",
      description:
        'Ramaswamy, a billionaire entrepreneur-turned-politician, said the BRICS is establishing a currency backed by gold to replace the dollar as the reserve currency of the world. "This is a major problem for the United States."',
    },
  ];
  return (
    <>
      <div className="grid gap-8 grid-cols-1 mt-8 max-sm:px-6 px-20 py-8">
        {newsData.map((news, index) => (
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
