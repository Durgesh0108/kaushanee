"use client";

import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const data = [
  {
    tab: "FAMOUS INDIAN SILKS",
    content: [
      {
        title: "POCHAMPALLY IKAT DESIGNS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729066955/MF-FF-406-44_upuais.jpg",
      },
      {
        title: "SAMBALPURI IKAT DESIGNS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729067094/il_fullxfull.1586664457_8f8v_gfmhix.jpg",
      },
      {
        title: "PATOLA IKAT DESIGNS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729067315/3530779_xwvhz5.jpg",
      },
      {
        title: "PAITHANI JAMDANI DESIGNS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729238056/7287b7081eb18693a13f6cd5cc2a88c4_jk5kyy.jpg",
      },
      {
        title: "UPPADA JAMDANI DESIGNS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "KALAMKARI DESIGNS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729238275/181647_angliyskaya-tkan-colefax-and-fowler-kollektsiya-casimir-artikul-f4208-02_riqdgm.jpg",
      },
      {
        title: "KANCHEEPURAM SILKS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729238356/caafcdfb-2514-46d5-bdb9-0abbfa507104_shutterstock_2002929443_dobbgb.jpg",
      },
      {
        title: "MUGA SILK OF ASSAM",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729238407/fe66dbc62637b2cfe607944917f681d4_yxyigd.jpg",
      },
      {
        title: "KASHMIR SILK SAREES/CARPETS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729238542/Latest-Pattu-Saree-Designs-Ikat_zlreph.jpg",
      },
    ],
  },
  // KARNATAKA SILKS
  {
    tab: "KARNATAKA SILKS",
    content: [
      {
        title: "KOLLEGAL",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729238749/441930730e0d1de5c364f1f2ca28fa26_uiazae.jpg",
      },
      {
        title: "KARNATAKA SILKS",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "KOLLEGAL SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729239937/i_nmz72f.jpg",
      },
      {
        title: "MOLKALMURU SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "CREPE SILK",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729245613/92486898252_o7m5vj.jpg",
      },
      {
        title: "ILKAL SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "MYSORE CREPE SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729246732/d1a22cf9fcf301b8cf7f22c21994bce9_uyerqo.jpg",
      },
      {
        title: "ILKLAL SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729246824/2ecc3f_3ff327dc60224cd0a12d0e74547fd60e_mv2_xgebk9.jpg",
      },
    ],
  },
  // BANARAS SAREES
  {
    tab: "BANARAS SAREES",
    content: [
      {
        title: "JANGLA",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "TANCHOI",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729247080/i_cicmli.jpg",
      },
      {
        title: "BANARASI JANGLA SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729247155/maxresdefault_fsuk12.jpg",
      },
      {
        title: "BANARASI TANCHOI SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729247224/0d64140fbfda2468e1b06105853d930c_mgh7ko.jpg",
      },
      {
        title: "BUTIDAR",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1729247379/i_ufmiq3.jpg",
      },
      {
        title: "CUTWORK",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "BANARASI BUTIDAR SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "BANARASI CUTWORK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
    ],
  },
  // WEST BENGAL SILKS
  {
    tab: "WEST BENGAL SILKS",
    content: [
      {
        title: "KORIAL/ GAROD",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "BALUCHARI",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "KORIAL SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "BALUCHARI SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "KANTHA",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "PRINTED",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "KANTA WORK SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
      {
        title: "PRINTED SILK SAREE",
        image:
          "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
      },
    ],
  },
  // {
  //   tab: "Understanding Silk Mark",
  //   content: [
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //   ],
  // },
  // {
  //   tab: "Understanding Silk Mark",
  //   content: [
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //     {
  //       title: "",
  //       image: "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg",
  //     },
  //   ],
  // },
];
export default function SilkWeavingCluster() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 justify-center">
        {data.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-lg font-medium ${
              activeTab === index
                ? "bg-[#533265] text-white"
                : "bg-gray-200 text-gray-700"
            } transition-colors duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {item.tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data[activeTab].content.map((item, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform transform hover:scale-105 rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image || "placeholder-image-url"}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
