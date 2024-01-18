import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "Apple opens state-of-the-art, sustainable corporate office in Bengaluru",
      description:
        "Spanning 15 floors, it can accommodate a workforce of up to 1,200. It also boasts dedicated lab spaces, collaborative areas, and wellness facilities",
    },
    {
      title:
        "Adani Group to invest Rs 12,400 cr in Telangana, Rs 1,000 cr earmarked for drone systems, missile development",
      description:
        "WEF2024: Gautam Adani, Chairman, Adani Group, said: “The new government in the Telangana has been extremely investor friendly and with the new planned policies, should attract more investments. Adani group will continue growing in Telangana at high pace with the provided.”",
    },
    {
      title:
        "Former business partners file defamation suit against MS Dhoni, Delhi HC to hear matter on Jan 18: Report",
      description:
        "The hearing in the matter is scheduled for January 18 under Justice Prathiba M Singh.",
    },
    {
      title:
        "Zee-Sony merger: Zee may claim damages from Sony if the deal fails at this stage, says report ",
      description:
        "Top company sources said that Zee was compelled to close down certain ventures to adhere to the merger conditions set by the Competition Commission of India (CCI). If the merger fails at this stage, it will be a huge loss for Zee.",
    },
    {
      title:
        "Drastic drop in study permits to Indian students after diplomatic row: Canadian minister",
      description:
        "The dispute was triggered by Canadian Prime Minister Justin Trudeau's claim in June of evidence linking Indian government agents to the killing of Khalistani terrorist Hardeep Singh Nijjar in British Columbia.",
    },
    {
      title:
        "Next Republican debate canceled after Nikki Haley says she’ll only participate if Donald Trump does",
      description:
        "Her statement was released a day after the all-important Iowa caucuses, in which Trump marked a wide margin of victory over both Haley and DeSantis.",
    },
    {
      title:
        "Unprovoked violation: Pak warns of serious consequences after Iran attacks Baloch bases",
      description:
        "State-run Mehr news agency reported that the Jaish ul-Adl's bases targeted in the Kuhe Sabz area were one of the largest bases of the terror group.",
    },
    {
      title:
        "Delhi freezes as mercury drops to 4 degrees Celsius; IMD issues orange, red alert for dense fog, cold wave conditions",
      description:
        "This could lead to several flights and trains getting cancelled or delayed or diverted.  ",
    },
    {
      title:
        "Fitch says India to remain one of fastest-growing countries but...",
      description:
        "The global ratings agency estimated India’s economy will grow 6.9% this fiscal year ending March 2024 and by 6.5% the year after and forecast headline inflation will ease towards 4.7% by the end of 2024.",
    },
    {
      title:
        "The driver must have good contacts: Autorickshaw seen on Mumbais Atal Setu, leaves netizens puzzled",
      description:
        "The image circulated on social media, raising questions about how the autorickshaw managed to bypass toll booths, which are designed to prevent such vehicles from accessing the bridge.",
    },
    {
      title:
        "‘This is when I lost my cool…’: Ranvir Shorey narrates distressing 10-hour IndiGo flight delay experience",
      description:
        "Ranvir Shorey, who had checked in two hours prior to the original departure time along with a group of seven passengers, was informed of the initial three-hour delay only upon arrival at the airport.",
    },
    {
      title:
        "Freshers or existing employees should upskill to earn more: TCS HR head on stagnant salaries at entry level",
      description:
        "TCS in its Q3 FY24 results stated that its headcount has reduced for the second consecutive quarter by 5,680 employees in the October to December 2023 period.",
    },
    {
      title:
        "War rooms at six metro airports, and more: Scindia unveils 6-point plan to reduce flight delay",
      description:
        "'Have sought incidence reporting thrice daily for all the 6 metro airports,' says Scindia",
    },
    {
      title:
        "Hyundai Creta 2024 launched in India at Rs 11 lakh: Check variants, price list, features, more",
      description:
        "The Hyundai Creta 2024 has a new dashboard featuring a 10.25-inch touchscreen that merges with the new 10.25-inch digital driver display from the Alcazar",
    },
    {
      title:
        "More trouble for Zee: SC upholds HC ruling to send Siti Networks loan default case to arbitration",
      description:
        "In 2020, Siti Broadband had availed of a loan of Rs 5 crore from Aditya Birla Finance, to be repaid in 19 quarterly instalments. According to Aditya Birla Finance, Siti Broadband has been defaulting on payments since November 2021.",
    },
    {
      title:
        "86% of CEOs think India’s economic growth will improve over the next 12 months: PwC’s Survey",
      description:
        "Study finds that 62 per cent of Indian CEOs are confident about their company’s growth over the next 12 months",
    },
    {
      title: "Start-up IPOs: Sebi’s continued efforts to empower investors",
      description:
        "On National Startup Day, here’s a look at the various steps taken by capital markets regulator Sebi to enhance disclosure and listing norms for start-ups",
    },
    {
      title:
        "Hyundai Creta SUV 2024 launch today: What to expect, how to watch LIVE",
      description:
        "The launch event will be broadcasted live online, allowing car enthusiasts from around the world to witness the unveiling in real-time",
    },
    {
      title:
        "Litigation finance start-up launches credit line for firms to settle lawsuits",
      description:
        "On the eve of National Startup Day, Gurugram-based LegalPay launches zero-interest credit line for businesses to settle legal disputes; aims to disburse ₹200 crore in 2024",
    },
    {
      title:
        "Confidence unleashed! Promoters raised their stake in over 100 small-cap companies in Q3",
      description:
        "Initial shareholding data shows that the promoters of Wardwizard Healthcare increased their stake the most to 74.08 per cent in Q3FY24 from 14.08 per cent in the preceding quarter",
    },
    {
      title:
        "Vivek Ramaswamy ends his US Presidential race, announces his support for Donald Trump: Report",
      description:
        "Ramaswamy, 38, had earlier told the Wall Street Journal that Trump may become ineligible to run due to his many legal challenges.",
    },
    {
      title:
        "Naukri.com founder Sanjeev Bikhchandani backs Narayana Murthy but says 70-hour work week is not religion",
      description:
        "In a conversation with Jivraj Singh Sachar on the Indian Silicon Valley Bank podcast, Bikhchandani emphasised that there was no entrepreneur in India who was successful without a 'work-life integration'.",
    },
    {
      title: "Oil ticks up as Middle East crisis escalates, tankers divert",
      description:
        "Brent crude futures LCOc1 rose 12 cents, or about 0.2%, to $78.27 a barrel at 0002 GMT. The contract had settled 14 cents lower on Monday.",
    },
    {
      title:
        "5% folks seem aggravated: EaseMyTrip CEO defends suspension of flight booking to Maldives",
      description:
        "According to Nishant Pitti, despite the potential loss of revenue and alienation of some users, the company experienced a surge in support from the Indian public, with app downloads increasing by 280% in the last week.",
    },
  ];
  return (
    <>
      <div className="grid gap-8 grid-cols-1 mt-8 max-sm:px-6 px-24 py-8">
        <h4 className=" text-2xl font-thin text-sky-400">
          TOP NEWS INSIGHTS ↘
        </h4>
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
