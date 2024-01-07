import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "TCS, Infosys to kick off Q3 score for IT. A snapshot of earnings calendar this week",
      description:
        "December is a seasonally weak quarter for IT majors due to higher furloughs, and analysts anticipate a likely impact of postponed wage hikes on margins. ",
    },
    {
      title:
        "Cold wave in India: Dense fog likely to prevail in Uttar Pradesh, Punjab other parts of north India for 4 days",
      description:
        "Cold to severe cold conditions are likely to prevail in northern and central India, with temperatures below normal. The IMD forecasts the situation to continue for 2-3 days.",
    },
    {
      title:
        "Breaking: Delhi schools to remain shut till Jan 12 for students up to class 5",
      description:
        "The development comes after Delhi's Directorate of Education withdrew an order extending winter vacation in schools in the national capital.",
    },
    {
      title:
        "&#039;Better to die in jail&#039;: Jet Airways&#039; Naresh Goyal tells special court",
      description:
        "Naresh Goyal, the founder of Jet Airways, pleads in court with 'folded hands' that he has 'lost every hope of life' amid the alleged Rs 538 crore fraud case. Goyal, who is currently in judicial custody, presents a grim picture of his physical health and personal life, including his wife's battle with cancer.",
    },
    {
      title:
        "Delhi govt withdraws order on extended winter break for schools; check details here",
      description:
        "The Directorate of Education said that the order, which extended the winter break, was issued by mistake",
    },
    {
      title: "Winter break in Delhi and Noida schools extended. Check timings",
      description:
        "Delhi is experiencing extreme cold waves and the India Meteorological Department has issued a yellow alert due to dense fog, light rainfall and drop in temperature for the next few days.",
    },
    {
      title:
        "ISRO chief S Somanath shares about Aditya-L1 legacy, says &#039;This is for whole world, not for India alone&#039;",
      description:
        "According to the ISRO chief, scientists had to make many changes so that the space satellite could be placed precisely.",
    },
    {
      title:
        "Cold day conditions to remain in THESE states for next 2 days: IMD",
      description:
        "The weather department has reported temperatures above normal by 1-3 degrees in Punjab, Haryana, Chandigarh, Delhi, north Rajasthan, and West Uttar Pradesh.",
    },
    {
      title:
        "Karnataka cabinet clears law that mandates 60% Kannada in signboards across state",
      description:
        "With this, all commercial establishments, industries, hospitals and institutions and organisations in the state are expected to have 60 per cent Kannada on the signboards and nameplates.",
    },
    {
      title:
        "&#039;Bharat Mata ki Jai&#039;: Indians rescued from hijacked vessel express joy, thanks Navy",
      description:
        'In a video shared by the Indian Navy, the rescued crew can be seen chanting "Bharat Mata Ki Jai" (Victory to Mother India) amidst tears of joy.',
    },
    {
      title:
        "&#039;Broken seats, no entertainment system&#039;: Air India passenger shares her harrowing experience on Delhi-Toronto flight after paying Rs 4.5 lakh",
      description:
        "A passenger who was travelling on an Air India flight from Delhi to Toronto recently took to social media to voice her displeasure about the journey",
    },
    {
      title:
        "All you need to know about Kajal Jha whose Rs 100 cr bungalow has been sealed by Delhi Police",
      description:
        "Kajal Jha's association with Ravi Kana began when she approached him seeking employment but quickly escalated as she became an integral part of his gang.",
    },
    {
      title:
        "ISRO&#039;s Aditya-L1 reaches Lagrange Point 1 to study the Sun; PM Modi lauds &#039;extraordinary feat&#039;",
      description:
        "The L1 point is about 1.5 million km from the Earth and 1 per cent of the total distance between the Earth and the Sun.",
    },
    {
      title:
        "&#039;Salaar&#039; worldwide box office collection: Prabhas-starrer nears Rs 675 cr gross in 15 days",
      description:
        "Salaar has earned Rs 667.59 crore at the global box office. On its fifteenth day on Friday, the film collected Rs 7.90 crore",
    },
    {
      title:
        "Indian Navy shares video showing how they secured hijacked ship in Arabian Sea",
      description:
        "The entire episode was captured on video and shared by the Indian Navy on X, showcasing the tense moments of the operation.",
    },
    {
      title:
        "The year of elections: 4 billion people will cast a vote in over 60 countries in 2024",
      description:
        "Anticipated to engage an estimated 4 billion voters, these polls will encompass the spectrum from presidential to legislative and local elections, marking a colossal exercise in democratic participation on a global scale.",
    },
    {
      title:
        "Enormous infrastructure investment by govt in first 2 quarters of 2023 worked for India: Raghuram Rajan",
      description:
        "On Friday, the latest advance estimate released by the National Statistical Office showed that the Indian economy is expected to grow 7.3 per cent on an annual basis in the current financial year.",
    },
    {
      title:
        "California-bound Alaska Airlines flight makes emergency landing in Oregon after window blows out",
      description:
        "Alaska Airlines posted on X and said they would provide more details as they become available.",
    },
    {
      title:
        "ISRO&#039;s Aditya-L1 spacecraft set to be injected into final orbit today at 4 pm; here&#039;s how it will be placed",
      description:
        "The final manoeuvre for the Aditya-L1 spacecraft will be performed by Indian Space Research Organisation (Isro) today",
    },
    {
      title:
        "Formula E Hyderabad E-Prix 2024 cancelled due to political rigmarole; see details",
      description:
        "The Hyderabad E-Prix was set to be the sole official FIA World Championship event in India for 2024, forming part of a broader multi-year agreement between Formula E and the Government of Telangana.",
    },
    {
      title:
        "Former Indian cricketer Ambati Rayudu quits YSRCP a week after joining party",
      description:
        '"This is to inform everyone that I have decided to quit the YSRCP Party and stay out of politics for a little while. Further action will be conveyed in due course of time," he wrote on X.',
    },
    {
      title:
        "2023 was a banner year for India’s real estate sector; how does the new year look like?",
      description:
        "The year 2023 marked an extraordinary phase for India’s real estate sector, with property sales reaching new heights amid rising consumer confidence and a robust Indian economy. The sector's outlook for the coming year looks even brighter",
    },
    {
      title:
        "ISRO&#039;s Aditya-L1 final orbit insertion in hours. Check details here",
      description:
        "Following the insertion, the satellite, which was launched from Sriharikota on September 2, is expected to stay in the strategic location, L1 or the Lagrange Point 1 for the next five years.",
    },
    {
      title:
        "&#039;Salaar&#039; box office collection Day 15: Prabhas-starrer crosses Rs 380 cr mark in India",
      description:
        "The film, directed by Prashanth Neel, minted Rs 3.50 crore on Friday, as per industry tracker Sacnilk",
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
