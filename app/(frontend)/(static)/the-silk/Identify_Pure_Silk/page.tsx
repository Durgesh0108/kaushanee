import Image from "next/image";
import React from "react";

export default function Identify_Pure_Silk() {
  return (
    <div className="container mx-auto px-4 mt-12 gap-y-12 md:gap-y-16">
      <h2 className="flex justify-center text-3xl font-bold mb-4">
        Silk Purity Testing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1729058047/Untitled-1-copy_amqvqk.png"
            alt="The Silk Image"
            height={500} // Reduce the height here
            width={1000}
            className="w-full h-[400px] object-cover rounded-lg" // Set the height as per your requirement
          />
        </div>
        <div className="space-y-4 text-xl">
          <p>
            The purity of silk can be easily ascertained by a simple Flame Test.
            Take out a few threads of the fabric and burn them from their ends.
            The threads burn differently for different fabrics as stated below.
          </p>
          <p>
            Silk: Burns slowly leaving a black bead like residue which crumbles
            easily with fingers, giving burnt hair smell
          </p>
          <p>
            Cotton/Rayon: Burns continuously with paper burning smell, Rayon
            leaving white ash
          </p>
          <p>
            Nylon/Polyster: Burns fast and melts like plastic, forming Polyester
            hard uncrushable beads.
          </p>
        </div>
      </div>
    </div>
  );
}
