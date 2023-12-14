import Link from "next/link";
import React from "react";

const Prizes = () => {
  return (
    <div className="h-auto  pt-10  shadow-inner max-sm:content-center">
      <h3 className="text-center text-4xl pb-6 -mt-2 text-gray-700 max-sm:text-2xl underline">
        Supported By
      </h3>
      <div className="w-full  justify-center flex max-sm:hidden">
         <img src="./supporters.jpeg" className="w-[600px]"/>
      </div>
     <div className="w-full justify-center flex sm:hidden">
      <img src="./logoVert.png" className="w-[300px]"/>
     </div>
    </div>
  );
}

export default Prizes;
