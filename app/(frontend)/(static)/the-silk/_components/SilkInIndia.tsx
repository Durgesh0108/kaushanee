import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SilkInIndia() {
  return (
    <div className="mb-12">
      <h2 className="flex justify-center text-3xl font-bold mb-4">
        Silk in India
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4 text-justify leading-relaxed text-xl">
          <p>
            Silk has been an essential part of India&apos;s rich culture since
            ancient times, representing royalty and prosperity. The Indian silk
            industry has made significant contributions to domestic and
            international markets, evolving from a flourishing industry during
            the Mughal era to the world&apos;s second-largest producer of silk
            after China.
          </p>
          <p>
            India has a long history of silk production, dating back to the
            Indus Valley Civilization. However, it was during the Mughal era
            that silk production became a thriving industry patronized by the
            rulers. Regions like Bengal, Assam, and South India were the major
            silk-producing areas in ancient times.
            <span className="ml-1">
              <Link href={"/the-silk/silk_in_india"} className="text-blue-500">
                Read More...
              </Link>
            </span>
          </p>
        </div>
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729056996/SMOI-Corporate-Brochure-1_gwcduu.jpg"
            alt="The Silk Image"
            height={500} // Reduce the height here
            width={1000}
            className="w-full h-full object-cover rounded-lg" // Set the height as per your requirement
          />
        </div>
      </div>
    </div>
  );
}
