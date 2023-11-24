import React from "react";

const Prizes = () => {
  return (
    <div className="h-60  pt-10  shadow-inner">
      <h3 className="text-center text-2xl underline pb-4 text-gray-600">Supported By</h3>
      <div className="flex justify-between px-24 ml-2">
        <img src="/google.png" className="h-28" />
        <img src="/meity.png" className="h-32 -ml-8 " />
        <img src="/microsoft.png" className="h-20 mt-6" />
      </div>
    </div>
  );
};

export default Prizes;
