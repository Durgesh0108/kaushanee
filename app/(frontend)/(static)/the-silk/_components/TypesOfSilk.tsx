"use client";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const data = [
  {
    title: "Mulberry",
    content:
      "Mulberry silk is known for its smoothness, softness, lustre and drape. Mulberry silk is the largest among the four types of silks produced in India. More than 90% of mulberry silk is contributed by the states of Karnataka, Andhra Pradesh, West Bengal, Tamil Nadu and Jammu & Kashmir. Kanncheepuram, Pochampally, Mysore Silks, Kashmir crepes & carpets , Dharmavaram, Murshidabad are some of the examples of Mulberry silks.",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728988926/mul_n8mrph.jpg",
  },
  {
    title: "Eri",
    content:
      "Eri spun silk is known for its softness, moderate sheen and comfort. North-eastern states and Assam. It is also produced in Bihar, West Bengal and Orissa. Eri silk is mainly used for making shawls in North Eastern states, sarees, garments & hosieries.",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728989201/eri-yarn-scaled_thprdy.jpg",
  },
  {
    title: "Tassar",
    content:
      "Tassar Silk is known for its coarse texture and lesser sheen, making it best suitable for making sarees and dresses. Tassar silk is second largest silk produced in India. Manipur, Himachal Pradesh, Uttar Pradesh, Chattisgarh, Assam, Meghalaya and Jammu & Kashmir are the states major contributors of Tassar silk production. Reeled Tassar X Reeled Tassar, Reeled Tassar X Ghicha are very popular Tassar material.",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728988988/tasar-yarn-scaled_znciyx.jpg",
  },
  {
    title: "Muga",
    content:
      "Assam is the only state producing Muga silk , nicknamed as golden silk owing to its golden sheen, is the costliest of silks Mekhela Chador is pride of Assam and is an exclusive product found almost in every household of the state of Assam. Sarees, Neck ties, fashionable products like Umbrellas, Shoes, Lamp shades are made using this golden silk. On experimental Muga silk threads are used in place of Zari in sarees.",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728989223/muga-cocoon_px3ryx.jpg",
  },
];

export default function TypesOfSilk() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Only one accordion open at a time
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Types of Silk</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side: Image */}
        <div className="flex justify-center  w-full">
          {/* {openIndex !== null && ( */}
          <Image
            src={
              openIndex !== null
                ? data[openIndex].image
                : "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728978886/Silk-Thread_u72e6v.png"
            }
            alt={openIndex ? data[openIndex].title : "Types Of Silk"}
            width={500}
            height={500}
            className="h-[400px] rounded-lg shadow-lg object-cover w-full"
          />
          {/* )} */}
        </div>

        {/* Right Side: Accordion */}
        <div>
          {data.map((item, index) => (
            <Card
              key={index}
              className="mb-4 shadow-lg border rounded-lg overflow-hidden"
            >
              <div
                className="cursor-pointer p-4 bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600 text-xl">{item.content}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
