// import React, { useState } from "react";
// import Link from "next/link";
// import SFPROFont from "../SFPROFont";
// import { useRouter } from "next/navigation";

// const DropdownMenu = ({ Fabrics }) => {
//   const [selectedCategory, setSelectedCategory] = useState(0);
//   const router = useRouter();
//   return (
//     // <SFPROFont>
//     <div className="relative flex ">
//       {/* Left Side - Fabrics */}
//       <div className="w-1/4 flex flex-col border-r border-gray-200">
//         {Fabrics.map((category, index) => (
//           <div
//             key={index}
//             className={`cursor-pointer p-2 hover:text-pink-500 ${
//               selectedCategory === index ? "text-pink-500" : ""
//             }`}
//             onMouseEnter={() => setSelectedCategory(index)}
//             onMouseLeave={() => setSelectedCategory(selectedCategory)}
//           >
//             <Link href={`/products?fabricId=${category.id}`}>
//               {category.name}
//             </Link>

//             {/* <div
//               onClick={() => router.push(`/products?fabricId=${category.id}`)}
//               className="cursor-pointer"
//             >
//               {category.name}
//             </div> */}
//           </div>
//         ))}
//       </div>

//       {/* Right Side - Images and Titles */}
//       {selectedCategory !== null && (
//         <div className="w-3/4 flex p-2">
//           <div className="grid grid-cols-3 lg:grid-cols-4 gap-8 ">
//             {Fabrics[selectedCategory].Type.map((type, idx) => (
//               <div className="flex flex-col gap-4" key={idx}>
//                 <div className="">
//                   <Link href={`/products?typeId=${type.id}`}>{type.name}</Link>
//                   {/* <div
//                     onClick={() => router.push(`/products?typeId=${type.id}`)}
//                     className="cursor-pointer"
//                   >
//                     {type.name}
//                   </div> */}
//                 </div>
//                 <div>
//                   {type.SubType.map((subtype, index) => (
//                     <div key={index} className="text-lg">
//                       <Link href={`/products?subTypeId=${subtype.id}`}>
//                         {subtype.name}
//                       </Link>

//                       {/* <div
//                         onClick={() =>
//                           router.push(`/products?subTypeId=${subtype.id}`)
//                         }
//                         className="cursor-pointer"
//                       >
//                         {subtype.name}
//                       </div> */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//     // </SFPROFont>
//   );
// };

// export default DropdownMenu;

// import { useState } from "react";

// export default function DropdownMenu({ Fabrics }) {
//   // State to track the open dropdown for fabrics and types
//   const [openFabricIndex, setOpenFabricIndex] = useState(null);

//   // Function to handle fabric dropdown toggle
//   const toggleFabricDropdown = (index) => {
//     setOpenFabricIndex(openFabricIndex === index ? null : index);
//   };

//   const [selectedCategory, setSelectedCategory] = useState(null);

//   return (
//     <div
//       id="multi-dropdown"
//       className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//     >
//       <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//         {Fabrics.map((fabric, fabricIndex) => (
//           <li key={fabricIndex}>
//             <button
//               // onClick={() => toggleFabricDropdown(fabricIndex)}
//               onMouseEnter={() => setSelectedCategory(fabricIndex)}
//               onMouseLeave={() => setSelectedCategory(selectedCategory)}
//               type="button"
//               className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//             >
//               {fabric.name}
//               <svg
//                 className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//             </button>

//             {/* Dropdown for Types */}
//             {selectedCategory === fabricIndex && (
//               <div
//                 id={`typeDropdown-${fabricIndex}`}
//                 className="bg-white divide-y  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                   {fabric.Type.map((type, typeIndex) => (
//                     <li key={typeIndex}>
//                       <a
//                         href={`/products?typeId=${type.id}`}
//                         className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                       >
//                         {type.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// // *****************************************

import Link from "next/link";
import { useState } from "react";

export default function FabricDropdown({ Fabrics }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div
      id="multi-dropdown"
      className="relative z-10 bg-[#533265] divide-y divide-gray-100 rounded-lg shadow w-48 "
    >
      <ul className="py-2 text-sm text-white">
        {Fabrics.map((fabric, fabricIndex) => (
          <li
            key={fabricIndex}
            className="relative"
            onMouseEnter={() => setSelectedCategory(fabricIndex)}
            onMouseLeave={() => setSelectedCategory(null)} // Reset when mouse leaves
          >
            <Link
              href={`/products?fabricId=${fabric.id}`}
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-[#533265] "
            >
              {fabric.name}
              <svg
                className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>

            {/* Dropdown for Types - Display on the right side */}
            {selectedCategory === fabricIndex && (
              <div
                id={`typeDropdown-${fabricIndex}`}
                className="absolute left-full top-0 bg-[#533265] divide-y divide-gray-100 rounded-lg shadow w-44 "
              >
                <ul className="py-2 text-sm text-white space-y-4">
                  {fabric.Type.map((type, typeIndex) => (
                    <li key={typeIndex}>
                      <Link
                        href={`/products?typeId=${type.id}`}
                        className="block px-4 hover:bg-[#533265]"
                      >
                        {type.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
