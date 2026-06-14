// import { Card } from "@/components/ui/Card";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const data = [
//   {
//     title: "Understanding Silk Mark",
//     content: "Guaranteeing the Authenticity and purity of Silk",
//     link: "/",
//     image: "",
//   },
//   {
//     title: "Label Authentication",
//     content: "Confirm label authenticity by Entering the label serial number",
//     link: "/",
//     image: "",
//   },
//   {
//     title: "Identify Pure Silk",
//     content:
//       "Simple flame test can tell about Silk purity so as Silk Mark Label",
//     link: "/",
//     image: "",
//   },
//   {
//     title: "Product Innovation",
//     content: "Innovation a pressing need of The Indian silk industry",
//     link: "/",
//     image: "",
//   },
// ];

// export default function SilkTabs() {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {data.map((data, index) => (
//         <Card>
//           <div className="w-full h-auto">
//             <Image
//               src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1728972686/880085f8-1a3a-4dab-981c-be061e5be8fe_tx1rte.jpg"
//               alt="The Silk Image"
//               height={1000}
//               width={1000}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//           <div>{data.title}</div>
//           <div>{data.content}</div>
//           <div>
//             <Link href={data.link}>Know More</Link>
//           </div>
//         </Card>
//       ))}
//     </div>
//   );
// }

import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    title: "Understanding Silk Mark",
    content: "Guaranteeing the Authenticity and purity of Silk",
    link: "/the-silk/understanding_silk_mark",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728988265/beautiful-charming-indian-woman-in-saree_aanzit.png",
  },
  {
    title: "Label Authentication",
    content: "Confirm label authenticity by Entering the label serial number",
    link: "https://silkmarkindia.com/index.php/label-authentication-2/",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728988301/diwali-selfie_knqm1d.png",
  },
  {
    title: "Identify Pure Silk",
    content:
      "Simple flame test can tell about Silk purity so as Silk Mark Label",
    link: "/the-silk/Identify_Pure_Silk",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728988331/inesh-thamotharampillai-6XZWrSBo5o4-unsplash-1-scaled_oergb1.jpg",
  },
  {
    title: "Product Innovation",
    content: "Innovation a pressing need of The Indian silk industry",
    link: "/the-silk/product_Innovation",
    image:
      "https://res.cloudinary.com/dbeuowl0x/image/upload/v1728988362/dibakar-roy-IFIorcZQ_OI-unsplash-1-scaled_aiw8mg.jpg",
  },
];

export default function SilkTabs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <Card
            key={index}
            className="shadow-lg transition-transform transform hover:scale-105 rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm items-center text-gray-600 mb-4">
                {item.content}
              </p>
              <Link
                href={item.link}
                className="inline-block bg-[#533265] text-white text-sm px-4 py-2 rounded-md transition-colors duration-200"
              >
                Know More
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
