"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" w-full text-center  px-16 pt-4 max-sm:pt-14 max-sm:px-2 border-2 border-gray-200 p-4">
        <div className="h-auto  pt-10  max-sm:content-center">
          <h3 className="text-center text-4xl pb-6 -mt-2 text-gray-700 max-sm:text-2xl underline">
            Supported By
          </h3>
          <div className="w-full  justify-center flex max-sm:hidden">
            <img src="./supporters.jpeg" className="w-[600px]" />
          </div>
          <div className="w-full justify-center flex sm:hidden">
            <img src="./logoVert.png" className="w-[300px]" />
          </div>
        </div>
        <div className="flex justify-between max-sm:block ">
          <div className="text-blue-500 text-left max-sm:text-center">
            <h2 className="text-2xl max-sm:text-sm">algabay AI</h2>
            <h4 className="max-sm:text-sm">Simplify Investments with AI</h4>
          </div>
          <div className="text-blue-500 text-right max-sm:text-sm max-sm:text-center max-sm:mt-2 max-sm:mb-4">
            <Link href="/About" className="mt-2 text-xl underline">
              About Us
            </Link>
            <br />
            <Link href="mailto:contact@algabay.com">→ contact@algabay.com</Link>
            <h5>Jbr Tech Park, Whitefield, Bengaluru</h5>
          </div>
        </div>

        <div className="text-sm text-gray-700 max-sm:text-xs">
          <p>© 2024 algabay AI Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
