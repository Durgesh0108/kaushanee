import Image from "next/image";
import React from "react";

export default function UnderstandingSilkMark() {
  return (
    <div className="container mx-auto px-4 mt-12 gap-y-12 md:gap-y-16">
      <h2 className="flex justify-center text-3xl font-bold mb-4">SMOI</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729056996/SMOI-Corporate-Brochure-1_gwcduu.jpg"
            alt="The Silk Image"
            height={500} // Reduce the height here
            width={1000}
            className="w-full h-full object-cover rounded-lg" // Set the height as per your requirement
          />
        </div>
        <div className="space-y-4 text-xl">
          <p>
            SMOI introduced the World&quot;s first label of authenticity for
            silks, the &quot;Silk Mark Label&quot; in the form of paper hangtags
            and sew-in labels. These are affixed only on pure silk products by
            the authorised users of Silk Mark. Each label has a hologram and a
            unique number printed on it, which helps the consumer to trace the
            product back to the authorised user.
          </p>
          <p>
            Consumers and traders of genuine silk demanded that the Central Silk
            Board should introduce measures to bring in fair practices to the
            trade. As a response to those demands, the Silk Mark Organisation of
            India (SMOI) was launched on 17th June 2004. SMOI is a registered
            Society under Karnataka Society Act 1960 with Registration No.1054 /
            2003-2004 dated 19/01/2004. It is an initiative by Central Silk
            Board (CSB), Ministry of Textiles, Government of India.
          </p>
          <p>
            SMOI is run by competent Textile Technologists who are well
            experienced in the silk industry and its trade. They work tirelessly
            for the benefit of the silk consumers, stakeholders in the silk
            industry and for generic promotion of Indian Silks across the world.
            SMOI is headquartered in Bengaluru and has ten chapters located
            strategically in and around the silk clusters of the country.
          </p>
        </div>
      </div>
    </div>
  );
}
