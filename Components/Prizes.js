import React from "react";

const Prizes = () => {
  return (
    <div className="h-auto  pt-10  shadow-inner max-sm:content-center">
      <h3 className="text-center text-2xl pb-6 -mt-2 text-gray-600 max-sm:text-sm">
        Supported By
      </h3>
      <div className="flex justify-between px-24 ml-2 max-sm:inline-block max-sm:ml-3">
        <img src="/google.png" className="h-28 max-sm:h-14 max-sm:ml-3" />
        <img src="/meity.png" className="h-32 -ml-8 max-sm:h-14 max-sm:ml-4" />
        <img src="/microsoft.png" className="h-20 mt-6 max-sm:h-14" />
      </div>
    </div>
  );
};

export default Prizes;
