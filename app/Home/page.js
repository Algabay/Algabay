"use client";

import React, { useEffect } from "react";
import Footer from "@/Components/Footer";
import DummyNews from "@/Components/DummyNews";
import Portfolios from "@/Components/Portfolios";
import CalculatorsBanner from "@/Components/CalculatorsBanner";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const Home = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!user && !userSession) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div>
      <CalculatorsBanner />
      <Portfolios />
      <DummyNews />
      <Footer />
    </div>
  );
};

export default Home;
