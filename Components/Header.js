"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add event listener to window scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `flex h-18 px-6 items-center justify-between fixed w-full bg-white z-10 ${
    scrolling ? "drop-shadow" : ""
  }`;

  return (
    <>
      <div className={headerClasses}>
        <Link href="/">
          <img src="/logo.png" className="h-10 mx-6 mt-2 mb-2" />
        </Link>

        <div className="flex gap-8 mr-8 mt-2">
          <Link href="">
            <button className="text-black border border-gray-300 px-2 py-1 rounded-md text-md hover:bg-blue-50 mb-2 ">
              Sign&nbsp;In
            </button>
          </Link>
          <Link href="/About" className="mt-2 text-md">
            About&nbsp;Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
