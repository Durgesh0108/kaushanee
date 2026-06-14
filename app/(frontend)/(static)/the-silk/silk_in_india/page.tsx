import Image from "next/image";
import React from "react";

export default function silk_in_india() {
  return (
    <div className="container mx-auto px-4 mt-12 gap-y-12 md:gap-y-16">
      <h2 className="flex justify-center text-3xl font-bold mb-4">
        Silk in India
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729076478/i_01_pxzooe.jpg"
            alt="The Silk Image"
            height={500} // Reduce the height here
            width={1000}
            className="w-full h-full object-cover rounded-lg" // Set the height as per your requirement
          />
        </div>
        <div className="space-y-4 text-xl">
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
          </p>
        </div>
      </div>
      <div className="w-full h-auto my-8">
        <Image
          src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729076575/i_02_ltv664.jpg"
          alt="The Silk Image"
          height={500} // Reduce the height here
          width={1000}
          className="w-full h-full object-cover rounded-lg" // Set the height as per your requirement
        />
      </div>
      <h2 className="flex justify-center text-3xl font-bold mb-4">Silk Mark</h2>
      <div className="space-y-4 text-xl">
        <p>
          Today, India is the world&apos;s second-largest producer of silk after
          China, accounting for around 18% of the world&apos;s silk production.
          The country&apos;s silk exports have grown over the years and
          significantly contributed to India&apos;s foreign exchange earnings.
        </p>
        <p>
          One of the key initiatives that have contributed to the growth of the
          Indian silk industry is the Silk Samagra scheme. The scheme aims to
          promote sericulture, silk processing, and silk trade. As a result, the
          silk production in India has increased from 28,523 metric tons in
          2015-16 to 37,793 metric tons in 2019-20.
        </p>
        <p>
          Despite growth, challenges persist in the Indian silk industry like
          competition and rising prices. Yet, the government aims to enhance
          quality and encourage indigenous silk products. The industry spans
          various regions, with key clusters in Karnataka, Tamil Nadu, Andhra
          Pradesh, West Bengal, and Jammu & Kashmir, each renowned for specific
          silk types like Mysore, Kanchipuram, and Tussar silk.
        </p>
        <p>
          The Silk Mark label, launched by the Central Silk Board, ensures pure
          silk products. It boosts consumer trust and sales. Government efforts
          like Silk Samagra and Make in India drive industry growth and rural
          employment. Indian silk symbolizes cultural heritage and economic
          strength, aided by government initiatives despite challenges. The
          future looks promising with ongoing support.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729076641/i_03_kkln8j.jpg"
            alt="The Silk Image"
            height={500} // Reduce the height here
            width={1000}
            className="w-full h-full object-cover rounded-lg" // Set the height as per your requirement
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729076650/i_04_kda6fr.jpg"
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
