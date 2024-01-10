import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "Paytm to invest Rs 100 crore in GIFT City to build global financial ecosystem",
      description:
        "Paytm's announcement to invest Rs 100 crore in GIFT City came ahead of the Vibrant Gujarat Global Summit 2024, scheduled to be inaugurated by Prime Minister Narendra Modi on January 10. ",
    },
    {
      title:
        "Suchana Seth case: Bengaluru CEO smothered 4-yr-old son to death, says doctor",
      description:
        "Suchana Seth, Bengaluru CEO of AI startup who has been arrested for allegedly killing her 4-year-old son, was unhappy with a court order that allowed her estranged husband to visit their son every Sunday.",
    },
    {
      title:
        "Indian economy may grow at 6.2% next fiscal due to neutral policy settings, positive credit momentum: UBS",
      description:
        "This growth is anticipated due to the favourable combination of neutral policy settings, positive credit momentum, and manageable macroeconomic macros amid a 15-year high household debt levels",
    },
    {
      title: "BlackRock announces cuts of roughly 600 jobs",
      description:
        "The job cuts would amount to roughly 600 positions based on BlackRock's workforce of 19,800 at the end of December 2022, the last time its employee numbers were updated.",
    },
    {
      title:
        "Investor Bill Ackman backs bid by dissidents for Harvard board seats",
      description:
        "The development represents a new challenge to the board, whose 30 members are typically nominated by the university's alumni association.",
    },
    {
      title: "Starbucks India to more than double store count to 1,000 by 2028",
      description:
        "Since opening its first cafe in October 2012, Tata Starbucks' store count has grown to 390. It has opened 57 stores so far this fiscal year and had added 71 in the previous fiscal.",
    },
    {
      title:
        "Biden administration issues rule that could curb &#039;gig&#039; work, contracting",
      description:
        "The U.S. Department of Labor on Tuesday issued a final rule that will force companies to treat some workers as employees rather than less expensive independent contractors, in a move that has riled business groups and will likely prompt legal challenges",
    },
    {
      title:
        "Hoteliers flock to Ayodhya in anticipation of massive tourist influx",
      description:
        "From ITC to Taj, leading hotel chains are coming up with properties across the holy town",
    },
    {
      title:
        "Zee misses $200 million Disney payment deadline amid Sony merger uncertainty",
      description:
        'Zee panned reports that claimed that Sony was planning to call off its merger. "Company is committed to the merger with Sony and is continuing to work towards a successful closure of the proposed merger,” Zee said.',
    },
    {
      title:
        "India story intact in worst half decade of growth in 30 years, says World Bank",
      description:
        "India forecast an annual growth of 7.3% in the fiscal year ending in March, the highest rate of any of the major global economies.",
    },
    {
      title:
        "Moody&#039;s cuts rating on Vedanta Resources for second time. Here&#039;s why it&#039;s worried",
      description:
        'Moody\'s said that Vedanta Resources, the parent of Indian miner Vedanta, will face material liquidity issues over the upcoming 24 months and warned that the "default risk" remains high.',
    },
    {
      title:
        "Rapido hosts ‘Cab Mahotsav’ in Delhi, plans to create 40,000 jobs",
      description:
        "Over 600 captains attended the event, with guaranteed prizes including refrigerators, washing machines, and televisions.",
    },
    {
      title:
        "Madhya Pradesh: Viral video shows rats feeding on food at IRCTC stall, Indian Railways reacts",
      description:
        "A video on X (formerly Twitter), showcasing rats feasting on food at an IRCTC stall in Madhya Pradesh, has gone viral on social media. The footage was captured by a passenger at the Itarsi Junction railway station.",
    },
    {
      title:
        "NEET PG 2024 exams rescheduled. Check latest dates and registration process",
      description:
        "Medical aspirants are advised to check detailed schedule at the official website — nbe.edu.in, natboard.edu.in.",
    },
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
