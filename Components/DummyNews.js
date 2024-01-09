import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title: "What explains slowing of manufacturing PMI?",
      description:
        "Economists note that it remains robust for now, but hints at moderation in activities",
    },
    {
      title:
        "Who is Suchana Seth, the Bengaluru CEO arrested for allegedly killing her 4-year-old son?",
      description:
        "Goa DGP Jaspal Singh told India Today that she was accused of murdering her four-year-old son in Goa.",
    },
    {
      title:
        "Cup noodles for Rs 500! Majority of fliers say they were overcharged for water, food on flights",
      description:
        "According to the survey, consumers indicated that products with similar net contents but different names or slightly different brands are sold for a significantly higher MRP onboard flights. ",
    },
    {
      title:
        "Bengaluru CEO murders her 4-year-old son in Goa, arrested while fleeing to Karnataka with body in bag",
      description:
        "In a shocking incident, a 39-year-old start-up founder from Bengaluru allegedly killed her four-year-old son in Goa. After this, she travelled to Karnataka with her son's body before she was caught.",
    },
    {
      title:
        "Maldives leader calls for President Mohamed Muizzu&#039;s ouster amid row with India",
      description:
        "Ali Azim, the Parliamentary Minority leader in the Maldives, has called for steps towards the removal of the country's President, Mohamed Muizzu. This call comes in the aftermath of the derogatory remarks made against Prime Minister Narendra Modi",
    },
    {
      title:
        "India should give up any residual dream of British empire: Top Chinese scholar on Maldives",
      description:
        "Tensions between India and the Maldives have escalated since President Muizzu, perceived as pro-China, took charge defeating India-friendly Ibrahim Mohamed Solih.",
    },
    {
      title:
        "Airline operators shall submit quarterly fatigue reports after analysis: DGCA",
      description:
        "The FDTL regulations include increased rest periods, redefining night duty, restricting flight timings and number of landings during night. ",
    },
    {
      title:
        "Mahua Moitra expulsion: Directorate of Estates issues eviction notice to TMC leader",
      description:
        "Mahua Moitra cash-for-query case: The Lok Sabha Secretariat had cancelled the allotment when she was disqualified on December 8, instructing her to vacate the property at 9B, Telegraph Lane within a month by January 7.",
    },
    {
      title:
        "Cold conditions, dense fog grip North India; light rain likely in Delhi today",
      description:
        "Cold conditions and dense fog enveloped many parts of North India on Tuesday morning, including Delhi and Lucknow. The minimum temperature in the national capital dropped to 6 degrees Celsius",
    },
    {
      title:
        "Gautam Adani-led Adani Group to invest Rs 42,700 crore in Tamil Nadu",
      description:
        "Adani Green Energy stated that it would invest Rs 24,500 crore – the biggest investment among the group companies – in three pump storage projects in the next 5-7 years.",
    },
    {
      title: "NASA to push back moon mission timelines amid spacecraft delays",
      description:
        "NASA's second Artemis mission is expected to be pushed beyond its planned late-2024 target after issues were uncovered with the Lockheed Martin-built Orion crew capsule's batteries during vibration tests, two of the people said.",
    },
    {
      title:
        "PM Modi reaches Ahmedabad for Vibrant Gujarat Global Summit, to inaugurate global trade show today; check details",
      description:
        "On January 9, the Prime Minister will arrive at Mahatma Mandir in Gandhinagar at around 9:30 am, where he will hold bilateral meetings with world leaders, followed by a meeting with CEOs of top global corporations",
    },
    {
      title: "Dollar pulls back, bitcoin jumps ahead of ETF approval deadline",
      description:
        "In cryptocurrencies, bitcoin hovered near its strongest level since April 2022 on growing anticipation of imminent approvals of spot bitcoin exchange-traded funds (ETF).",
    },
    {
      title:
        "Biden administration to unveil contractor rule that could upend gig economy",
      description:
        "The administration of U.S. President Joe Biden will release a final rule as soon as this week that will make it more difficult for companies to treat workers as independent contractors rather than employees that typically cost a company more, an administration official said",
    },
    {
      title:
        "&#039;Witness pristine and majestic underwater beauty of Lakshadweep,&#039; says Israel amid India-Maldives row",
      description:
        "Israel has expressed its readiness to begin a water desalination project in Lakshadweep",
    },
    {
      title:
        "India-Maldives row: Traders body calls for boycott of business transactions with the island nation",
      description:
        "CAIT stressed on 'the need for mutual respect in diplomatic discourse and condemn any form of disrespect towards the leaders of friendly nations'",
    },
    {
      title: "360 ONE Prime to raise upto Rs 1,000 cr via public issue NCDs",
      description:
        "360 ONE Prime will issue Tranche I of secured, rated, listed, redeemable, NCDs, with base issue size of Rs 200 crore, with an option to retain over-subscription of up to Rs 800 crore aggregating to Rs 1,000 crore",
    },
    {
      title:
        "‘We are working with airlines to improve direct connectivity to Lakshadweep,&#039; says EaseMyTrip CEO amid India-Maldives row",
      description:
        "CEO Prashant Pitti said that he in touch with Tourism Minister and Aviation Minister to improve the tourism in Lakshadweep. He also pointed out that there are 4 to 5 good properties on the pristine island",
    },
    {
      title:
        "Tamil Nadu bags investments worth Rs 6.6 lakh crore at GIM 2024: CM Stalin",
      description:
        "Investment proposals to create 26.9 lakh direct and indirect jobs in the southern state, as per announcements made at the two-day Global Investors Meet 2024 in Chennai",
    },
    {
      title:
        "Sony-Zee merger deal evenly poised, it is still in the works: Sources",
      description:
        "Earlier on Monday, a report said Sony is working on sending termination notice to Zee before January 20",
    },
    {
      title:
        "3,400% increase in on-platform searches for Lakshadweep since PM Modi&#039;s recent visit: MakeMyTrip",
      description:
        "Lakshadweep became a major talking point on social media after Prime Minister Modi's visit to the island.",
    },
    {
      title: "Sony plans to call off $10-bn merger With Zee: Report",
      description:
        "Standoff over Punit Goenka's leadership in the entity could be the reason for Sony's decision, said a report on Monay",
    },
    {
      title:
        "What Zomato and iPhones can tell you about how Indian economy is growing",
      description:
        "Calling the issue of K-shaped recovery baseless, the report questioned the efficacy of using ages-old proxies such as low 2-wheeler sales or fragmented land holdings to support some pre-destined narratives of India not doing well.",
    },
    {
      title:
        "Ram temple inauguration: Ayodhya surpasses Goa, Himachal for investment, real estate queries; property rates soar",
      description:
        "Ayodhya Ram temple inauguration: The property rates have soared by more than 100 per cent in the past year in the city.",
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
