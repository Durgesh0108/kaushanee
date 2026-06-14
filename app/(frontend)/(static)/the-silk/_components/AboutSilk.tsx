import RufinaFont from "@/components/RufinaFont";
import Image from "next/image";
import React from "react";

export default function AboutSilk() {
  return (
    <div className="mb-12">
      {/* <RufinaFont> */}
        <h2 className="flex justify-center text-3xl font-bold mb-4">
          About Silk
        </h2>
      {/* </RufinaFont> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg"
            alt="The Silk Image"
            height={500} // Reduce the height here
            width={1000}
            className="w-full h-[300px] object-cover rounded-lg" // Set the height as per your requirement
          />
        </div>
        <div className="text-justify leading-relaxed text-xl">
          <p>
            When we hear the word &quot;silk,&quot; we often think of smooth and
            shiny fabrics. Technically, silk refers to the fibers used to create
            these fabrics. Silk is a natural protein fiber derived from animals,
            such as moths, spiders, and even certain types of clams.
          </p>
          <p className="mt-4">
            The silk most commonly known is made by moth larvae (caterpillars),
            specifically found in their cocoons. Each cocoon is spun with a
            single long fiber made from the larvae&apos;s saliva. This fiber can
            range from 300 to 900 meters long, and in some cases, up to 1600
            meters, which is about five times the height of the Eiffel Tower.
          </p>
        </div>
      </div>
    </div>
  );
}
