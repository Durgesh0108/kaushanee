import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Elasticity",
    content:
      "Silk is fairly absorbent. Water weakens the fibers, though, so treat your silk carefully when you’re washing it.",
  },
  {
    title: "Absorbency",
    content:
      "If they’re treated well, silk clothes are good at keeping their shape. Silk is flexible and has some elasticity.",
  },
  {
    title: "Thermal regulation",
    content:
      "Silk’s good at maintaining your body temperature which means it can help you feel cool in hot weather and warm in the cold.",
  },
  {
    title: "Shine",
    content:
      "Silk fibers are smooth and straight, unlike wool, for example, which has a scaliness you’ll see if you put it under a microscope.",
  },
  {
    title: "Elegance",
    content:
      "Silk is Smooth, Soft, Lustrous, Light weight & resilient making it most elegant textile fibre.",
  },
  {
    title: "Comfort",
    content:
      "Silk has moisture absorbing as well as insulating, is moderately warm during winters and cool in summers, making it the most comfortable fiber",
  },
  {
    title: "Strength",
    content:
      "Although Silk is the strongest natural fibre, stronger that steel, loses up to 20% of its strength when wet. Handle with delicacy while washing.",
  },
  {
    title: "Draped",
    content:
      "Silk possess excellent drapability along with added advantage of its suppleness & pliability suits for rich draperies such as sarees & curtains.",
  },
];

export default function Properties() {
  return (
    <div className="mb-12">
      <h2 className="flex justify-center text-3xl font-bold mb-4">
        The Properties of Silk
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform transform hover:scale-105 rounded-lg overflow-hidden"
          >
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-lg items-center text-gray-600 mb-4">
                {item.content}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
