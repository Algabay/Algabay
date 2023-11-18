"use client";
import React from "react";
import NewsSection from "@/Components/NewsSection";
import Banner from "@/Components/Banner";
import WidgetBanner from "@/Components/WidgetBanner";
import WidgetTop from "@/Components/WidgetTop";
import Footer from "@/Components/Footer";

const page = () => {
  return (
    <div>
      <Banner />

      <NewsSection />
      <Footer />
    </div>
  );
};

export default page;
