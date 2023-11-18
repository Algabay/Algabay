"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex h-18 px-5 items-center justify-between">
        <Link href="/">
          <img src="/logo.png" className="h-10 mx-6 mt-1 mb-2" />
        </Link>

        <div className="flex gap-8 mr-10">
          <Link href="/Signup">
            <button className="text-black border border-gray-300 px-2 py-1 rounded-md text-md hover:bg-blue-50">
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
