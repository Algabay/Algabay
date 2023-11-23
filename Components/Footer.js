"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" w-full h-36 text-center   px-16 pt-4">
        <div className="flex justify-between">
          <div className="text-blue-500 text-left">
            <h2 className="text-2xl">algabay AI</h2>
            <h4>Simplify Investments with AI</h4>
          </div>
          <div className="text-blue-500 text-right">
            <h4 className="text-xl underline">Company</h4>
            <Link href="mailto:contact@algabay.com">→ contact@algabay.com</Link>
            <h5>Jbr Tech Park, Whitefield, Bengaluru</h5>
          </div>
        </div>

        <div className="text-sm text-gray-700">
          <p>© 2023 algabay AI Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
