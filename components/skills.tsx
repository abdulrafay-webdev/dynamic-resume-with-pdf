import React from "react";

export const Skills = (props:any) => {
  return (
    <div className="md:mb-5">
      <h1 className="md:scroll-m-20 md:pb-2 md:text-3xl text-sm text-blue-500 font-semibold tracking-tight first:mt-0">
        Skills :
      </h1>
      <ol className="md:my-1 md:ml-9 ml-4 md:p-2 px-0.5 list-disc md:text-lg text-xxs font-medium md:[&>li]:mt-1 md:flex">
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">{props.firstskillname} :</h4>
          <p className="font-light">
            {props.firstdescription}
          </p>
        </li>
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">{props.secondskillname} :</h4>
          <p className="font-light">
            {props.seconddescription}
          </p>
        </li>
        <li>
          <h4 className="text-green-700 md:text-lg text-xs">{props.thirdskillname} :</h4>
          <p className="font-light">
           {props.thirddescription}
          </p>
        </li>
      </ol>
    </div>
  );
};
