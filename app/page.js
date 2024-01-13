"use client";
import React from "react";
import NewsSection from "@/Components/NewsSection";
import Banner from "@/Components/Banner";
import WidgetBanner from "@/Components/WidgetBanner";
import WidgetTop from "@/Components/WidgetTop";
import Footer from "@/Components/Footer";

import DummyNews from "@/Components/DummyNews";
import Header from "@/Components/Header";

const page = () => {
  return (
    <div>
      <Banner />

      <DummyNews />

      <Footer />
    </div>
  );
};

export default page;
