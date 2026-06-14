import Image from "next/image";
import React from "react";

export default function TheMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Silk Map</h2>
      <div className="">
        {/* Left Side: Image */}
        <div className="flex justify-center items-center">
          {/* {openIndex !== null && ( */}
          <Image
            src={
              "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728979166/M_03_wxmdvp.png"
            }
            alt={"Types Of Silk"}
            width={500}
            height={500}
            // className=" object-cover hover:animate-bounce rounded-lg shadow-lg cursor-pointer"
            className=" object-cover  cursor-pointer"
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
