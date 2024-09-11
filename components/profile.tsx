import Image from "next/image";
import React from "react";

export const Profile = (props:any) => {
  return (
    <div className=" md:h-[297mm] h-[148.5mm] bg-blue-500 p-2 md:pt-10 md:pb-10 flex flex-col items-center justify-between">
      <div>
        <Image
          className="rounded-full"
          src={require("./images/profile.png")}
          alt="profile pic"
        />
        <h1 className="md:text-3xl text-xs font-bold text-center text-white mb-1">{props.name}</h1>
        <p className="md:text-lg text-xxs font-semibold text-yellow-300 text-center">{props.designation}</p>
      </div>
      {/* info start  */}
      <div className="md:mb-5 mb-1">
        <h1 className="md:scroll-m-20 scroll-m-1 md:pb-2 pb-0 md:text-2xl text-xs font-semibold text-white tracking-tight first:mt-0">Personal Info :</h1>
        <ol className="my-0 md:ml-9 ml-2 list-disc md:text-lg text-xxs md:font-semibold font-medium [&>li]:mt-0">
            <li><p className="text-yellow-300">Father Name: </p>{props.fname}</li>
            <li><p className="text-yellow-300">Religion: </p>{props.religion}</li>
            <li><p className="text-yellow-300">Age: </p>{props.age}</li>
            <li><p className="text-yellow-300">Nationality: </p>{props.nationality}</li>
            <li><p className="text-yellow-300">Domicile: </p>{props.domicile}</li>
        </ol>
    </div>
      {/* info end  */}
      <div className="w-full overflow-hidden break-words p-1  md:p-2">
        <h1 className="md:text-2xl text-xs font-bold text-left text-white mb-1">Contact</h1>
        <ul className="md:text-sm text-xxs">
          <li>
            <p>
              <b className="text-yellow-300">Number:</b>
              <br />
              {props.phone}
            </p>
          </li>
          <li>
            <p>
              <b className="text-yellow-300">Email:</b>
              <br />
              {props.email}
            </p>
          </li>
          <li>
            <p>
              <b className="text-yellow-300">Address:</b>
              <br />
              {props.address}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
