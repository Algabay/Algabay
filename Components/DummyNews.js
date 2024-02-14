import React from "react";
const newsDataPath = "./news.json";

const DummyNews = () => {
  const newsData = [
    {
      title:
        "Paytm clarifies on FEMA case: &#039;Paytm Payments Bank doesn&#039;t undertake outward foreign remittance&#039;",
      description:
        "Earlier, it was reported that the central probe agency was investigating if platforms run by One 97 Communications were involved in violations of foreign exchange rules.",
    },
    {
      title:
        "RBI Governor meets bank CEOs, ask them to maintain vigil around build-up of risks",
      description:
        "The Governor in his remarks complimented the banks on their improved financial performance and that of the whole banking sector. While noting the resilience of the domestic financial system with healthy balance sheets of banks, he said banks should be cautious around this time.",
    },
    {
      title:
        "Jaya Bachchan all set for 5th Rajya Sabha, declares joint net worth of Rs 1,578 cr with Amitabh Bachchan",
      description:
        "As per the election affidavit filed by her, Jaya Bachchan’s personal net worth for the financial year 2022-23 is Rs 1,63,56,190. Amitabh Bachchan's net worth was reported to be Rs 273,74,96,590 for the same year.",
    },
    {
      title:
        "Economics of an MSP guarantee: Experts say may be difficult given financial implications",
      description:
        "Annual procurement, hike every year could have huge ramifications for the exchequer, economists say",
    },
    {
      title:
        "RBI asks Visa, Mastercard to stop business payments via commercial cards: Report",
      description:
        "Industry sources said that the central bank is concerned about the flow of money through the card route toward non-KYC-ed merchants.",
    },
    {
      title:
        "Rajya Sabha polls: Sonia Gandhi, Akhilesh Prasad among Congress candidates for upper house ",
      description:
        "A total of 56 members of Rajya Sabha from 15 states are retiring in April and the election to the seats will be held on February 27. The last date for filing nominations is February 15.",
    },
    {
      title:
        "Adani Green Energy begins generation from world’s largest energy park in Gujarat ",
      description:
        "Adani Green Energy plans to develop 30 GW of renewable energy capacity at the Khavda park, operational in the next five years",
    },
    {
      title:
        "Oyo might withdraw IPO application; raise money from private investors: Report",
      description:
        "Oyo is reportedly planning to raise new cash from private market investors in the next six to eight months. ",
    },
    {
      title: "PM Modi to inaugurate BAPS Hindu Temple in Abu Dhabi today",
      description:
        'BAPS Hindu Temple to be inaugurated today: "The construction of the BAPS temple would not have been possible without your support," PM Modi told UAE President.',
    },
    {
      title:
        "&#039;Purse strings will be tightened&#039;: Zee&#039;s Punit Goenka hints at layoffs after Sony snub",
      description:
        "While Goenka’s plan included recalibration of cost structure for businesses such as OTT or the implementation of content and tech strategies to drive revenues, certain outputs of the firm will also need to be curtailed to improve revenues and margins.",
    },
    {
      title:
        "&#039;Hope the baby takes…&#039;: Harsh Goenka’s cryptic tweet hints at Virat Kohli, Anushka Sharma’s second child",
      description:
        "Playfully speculating on the child's future endeavors, Goenka posed the question of whether the baby would follow in its father's cricketing footsteps or take after its mother, Anushka Sharma, in pursuing a career in the film industry.",
    },
    {
      title:
        "Sony&#039;s claims regarding merger, termination fee not tenable: Zee Entertainment in Q3 report",
      description:
        "In January, Culver Max Entertainment (previously Sony Pictures Network India) called off the $10-billion merger with ZEEL after it claimed that Zee failed to meet some financial terms of the deal and come up with a plan to address them.",
    },
    {
      title:
        "Valentine&#039;s Day: Zomato plays cupid to help people &#039;find a match&#039;",
      description:
        "Zomato is offering its users a chance to find their perfect foodie companion through a unique matchmaking service. ",
    },
    {
      title:
        "Moody&#039;s has a change of heart after a year, revises outlook on 4 Adani companies",
      description:
        "The global ratings agency has revised the outlook on Adani Green Energy, Adani Green Energy Restricted Group (AGEL - RG-1), Adani Transmission Step One, and Adani Electricity Mumbai to “stable” from “negative”.",
    },
    {
      title:
        "&#039;Execution solely rests with govt&#039;: Shah Rukh Khan&#039;s team denies involvement in the release of ex-Navy veterans from Qatar",
      description:
        "SRK’s statement came after former Rajya Sabha MP Subramanian Swamy stirred the pot by claiming Bollywood superstar Shah Rukh Khan played a pivotal role in the extradition process.",
    },
    {
      title:
        "Adani-Hindenburg issue: Review petition filed against SC&#039;s Jan 3 judgment",
      description:
        "The Supreme Court bench on January 3 said that there is no ground to either transfer the probe from SEBI to an SIT or to order SEBI to revoke its regulations.",
    },
    {
      title:
        "Gunshots fired at the residence of Khalistani leader Gurpatwant Singh Pannun’s associate",
      description:
        "The bullet hole was discovered by a construction crew in the window of Gosal's unfinished Brampton, Ontario home.",
    },
    {
      title:
        "IndiGo flight parked at Mumbai airport receives bomb threat, investigation underway",
      description:
        "Upon landing safely at 8:47 am, the aircraft was immediately attended to by the Bomb Detection and Disposal Squad, who conducted a thorough search. Fortunately, no bomb was found on board.",
    },
    {
      title:
        "JSW Steel joins hand with Japan&#039;s JFE Steel for steel plant in Karnataka, stock falls marginally",
      description:
        "At 12.40 pm, JSW Steel shares were trading at Rs 806.65,  down by 0.46 per cent.",
    },
    {
      title:
        "Aston Martin’s Fernando Alonso says Lewis Hamilton can bring something extra to Ferrari",
      description:
        "The veteran Spaniard, currently at Aston Martin, reminisced about his own stint at Ferrari from 2010-2014, a period marked by tantalisingly close championship pursuits yet ultimately devoid of ultimate success for the Maranello outfit.",
    },
    {
      title:
        "SAIL records sharp 22% decrease in net profit for October-December quarter",
      description:
        "The state-owned company reported a 22% fall in its consolidated net profit, which stood at Rs 422.92 crore, compared to the net profit of Rs 542.18 crore recorded in the same quarter of the previous year. ",
    },
    {
      title:
        "Coal India Q3 results: Profit rises to Rs 9,069 cr, board announces interim dividend of Rs 5.25",
      description:
        "Coal India's board has announced an interim dividend of Rs 5.25 per share.",
    },
    {
      title: "GST anti-profiteering: Supreme Court issues notice to Centre",
      description:
        "SLP filed by Excel Rasayan against Delhi HC ruling upholding the constitutionality of anti-profiteering provisions",
    },
    {
      title:
        "&#039;60-year-olds don&#039;t understand...&#039;: Ashneer Grover criticises RBI action on Paytm",
      description:
        'Grover expressed his concerns, stating that the regulatory stance sends a message that traditional banks are deemed "systemically important," while fintechs are not accorded the same recognition.',
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
