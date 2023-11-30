import React from "react";

const Prizes = () => {
  return (
    <div className="h-60  pt-10  shadow-inner">
      <h3 className="text-center text-2xl pb-6 -mt-2 text-gray-600 max-sm:text-sm">Supported By</h3>
      <div className="flex justify-between px-24 ml-2 max-sm:inline-block">
        <img src="/google.png" className="h-28 max-sm:h-14" />
        <img src="/meity.png" className="h-32 -ml-8 max-sm:h-14 max-sm:ml-2" />
        <img src="/microsoft.png" className="h-20 mt-6 max-sm:h-14" />
      </div>
    </div>
  );
};

export default Prizes;
