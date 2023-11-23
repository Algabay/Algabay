"use client";
import React from "react";
import NewsSection from "@/Components/NewsSection";
import Banner from "@/Components/Banner";
import WidgetBanner from "@/Components/WidgetBanner";
import WidgetTop from "@/Components/WidgetTop";
import Footer from "@/Components/Footer";
import Prizes from "@/Components/Prizes";

const page = () => {
  return (
    <div>
      <Banner />

      <NewsSection />
      <Prizes />
      <Footer />
    </div>
  );
};

export default page;
