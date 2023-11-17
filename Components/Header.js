"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles/Header.css";

const Header = () => {
  return (
    <>
      <div className="flex h-18 px-5 items-center justify-between">
        <Link href="/">
          <img src="/logo.png" className="h-10 mx-6 mt-1 mb-2" />
        </Link>

        <div className="flex gap-8 mr-10">
          <Link href="/Signup">
            <button className="text-black-400 border-2 border-stone-200 px-2 py-1 rounded-md text-sm">
              Sign&nbsp;Up
            </button>
          </Link>
          <Link href="/About" className="mt-2 text-sm">
            About&nbsp;Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
