import React from "react";

export const Info = () => {
  return (
    <div className="md:mb-5 mb-1">
        <h1 className="md:scroll-m-20 scroll-m-1 md:pb-2 pb-0 md:text-2xl text-xs font-semibold text-white tracking-tight first:mt-0">Personal Info :</h1>
        <ol className="my-0 md:ml-9 ml-3 list-disc md:text-lg text-xxs md:font-semibold font-medium [&>li]:mt-0">
            <li><p className="text-yellow-300">Father Name: </p>Muhammad Zahid</li>
            <li><p className="text-yellow-300">Religion: </p>Islam</li>
            <li><p className="text-yellow-300">DOB: </p>25-October-2005</li>
            <li><p className="text-yellow-300">Nationality: </p>Pakistani</li>
            <li><p className="text-yellow-300">Domicile: </p>Karachi</li>
        </ol>
    </div>
  );
};
