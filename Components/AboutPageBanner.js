import React from "react";

const AboutPageBanner = () => {
  return (
    <>
      <div className="h-auto border-2 border-gray-500">
        <p className="">
          <span className="">Meet the Team : </span>
          <br /> At Algabay, we believe that innovation and expertise are at the
          heart of delivering superior investment solutions. Our team is
          composed of passionate individuals with diverse backgrounds.
        </p>
      </div>

      <div className="container">
        <div className="first">
          <p className="text">
            <span className="spanelement">Biswarup Sen</span>
            <br />
            <span className="suit">Founder & CEO</span>
            <br />
            As the founder and CEO of Algabay, Biswarup Sen brings his lifelong
            passion for AI and machine learning to the world of finance. With
            over years of experience in Software development and AI, His journey
            is a testament to his dedication to learning new technologies. His
            background is deeply rooted in technology, and he has a vision for
            creating value in society by combining technology with finance.
          </p>
        </div>

        <div className="second">
          <p className="text">
            <span className="spanelement">Sai Sharan</span>
            <br />
            <span className="suit">Co-founder & CFO</span>
            <br />
            Sai Sharan, our co-founder and CFO, is the financial backbone of
            Algabay. With over 5 years of hands-on experience as a financial
            trader, Sai brings a unique perspective to our team. He has
            successfully navigated the intricacies of stock trading, forex
            trading, and cryptocurrency markets, making him a valuable asset in
            understanding market dynamics and trends.
          </p>
        </div>
        <div className="third">
          <p className="text">
            <span className="spanelement">Adarsh Arunkumar</span>
            <br />
            <span className="suit">Co-founder & CTO</span>
            <br />
            As the CTO and Co-Founder of Algabay AI, Adarsh brings his deep
            expertise in machine learning and AI to the company, with over 4
            years of experience in ML, ethical hacking, MERN stack, applied AI,
            and research. He is an active open source contributor and has worked
            in several startups before joining Algabay.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPageBanner;
