// "use client";

// import { Preview } from "@/components/preview";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { Skeleton } from "@mui/material";

// export default function DressStyleComponent({
//   DressStyles,
//   TopViews,
//   Attires,
// }) {
//   const [selectedDressStyle, setSelectedDressStyle] = useState(
//     DressStyles[0].id
//   );
//   const [selectedTopView, setSelectedTopView] = useState(TopViews[0].id);

//   const [dressStyle, setDressStyle] = useState(DressStyles[0]);
//   const [topView, setTopView] = useState(TopViews[0]);
//   const [attire, setAttire] = useState(null);

//   useEffect(() => {
//     const dress = DressStyles.find((dress) => dress.id === selectedDressStyle);
//     setDressStyle(dress);
//   }, [DressStyles, selectedDressStyle]);

//   useEffect(() => {
//     const topview = TopViews.find((top) => top.id === selectedTopView);
//     setTopView(topview);
//   }, [TopViews, selectedTopView]);

//   useEffect(() => {
//     const attires = Attires.filter(
//       (attire) =>
//         attire.dressStyleId === selectedDressStyle &&
//         attire.topViewId === selectedTopView
//     );

//     if (!attires.length) {
//       setAttire(null);
//     } else {
//       setAttire(attires[0]);
//     }
//   }, [selectedDressStyle, selectedTopView, Attires]);

//   return (
//     <div className="mt-4 container">
//       <div className="grid grid-cols-3 gap-4">
//         <div className="h-full w-full col-span-1 flex flex-col gap-4">
//           <div className="h-[600px] ">
//             <div className="h-full">
//               <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 loop={true}
//                 pagination={{
//                   dynamicBullets: true,
//                   clickable: true,
//                 }}
//                 modules={[Pagination, Navigation, Autoplay]}
//                 className="w-full h-full"
//               >
//                 {!attire || !attire.images || attire.images.length === 0 ? (
//                   <SwiperSlide className="h-full">
//                     <div className="h-full w-full flex items-center justify-center">
//                       <Skeleton
//                         variant="rectangular"
//                         className="rounded h-full w-full"
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ) : (
//                   attire.images.map((image, index) => (
//                     <SwiperSlide className="h-full" key={index}>
//                       <div className="h-full w-full">
//                         <Image
//                           src={image.url}
//                           alt={image.id}
//                           width={150}
//                           height={100}
//                           className="h-full w-full object-cover rounded-md"
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))
//                 )}
//               </Swiper>
//             </div>
//           </div>
//           <div className="h-1/4 ">
//             <div className="h-full flex gap-4 justify-center">
//               {TopViews.map((top, index) => (
//                 <div
//                   key={index}
//                   onClick={() => setSelectedTopView(top.id)}
//                   className={`h-24 w-36 cursor-pointer ${
//                     selectedTopView === top.id ? "border-2 border-blue-500" : ""
//                   }`}
//                 >
//                   <Image
//                     src={top.imageUrl}
//                     height={100}
//                     width={150}
//                     alt={`top-view-${top.name}`}
//                     className="h-full w-full object-cover rounded-md"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="col-span-2 gap-4 flex flex-col justify-between">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <ol>
//                 {DressStyles.map((dress, index) => (
//                   <li
//                     key={index}
//                     onClick={() => setSelectedDressStyle(dress.id)}
//                     className={`cursor-pointer ${
//                       selectedDressStyle === dress.id
//                         ? "font-bold text-blue-500"
//                         : ""
//                     }`}
//                   >
//                     {dress.name}
//                   </li>
//                 ))}
//               </ol>
//             </div>
//             <div className="w-full">
//               <Preview value={dressStyle?.description} />
//             </div>
//           </div>
//           <div className="grid grid-cols-4 gap-4 ">
//             {dressStyle?.videoUrl?.split(", ").map((video, index) => (
//               <div key={index} className="w-full">
//                 <iframe
//                   src={video}
//                   height={120}
//                   width={200}
//                   key={index}
//                   title={`video-${index}`}
//                 ></iframe>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // {!attire || !attire.images || attire.images.length === 0 ? (
// //   <SwiperSlide className="h-full">
// //     <div className="h-full w-full flex items-center justify-center">
// //       <Skeleton
// //         variant="rectangular"
// //         className="rounded h-full w-full"
// //       />
// //     </div>
// //   </SwiperSlide>
// // ) : (
// //   attire.images.map((image, index) => (
// //     <SwiperSlide className="h-full" key={index}>
// //       <div className="h-full w-full">
// //         <Image
// //           src={image.url}
// //           alt={image.id}
// //           width={150}
// //           height={100}
// //           className="h-full w-full object-cover rounded-md"
// //         />
// //       </div>
// //     </SwiperSlide>
// //   ))
// // )}

"use client";

import { Preview } from "@/components/preview";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Skeleton } from "@mui/material";

export default function DressStyleComponent({
  DressStyles,
  TopViews,
  Attires,
}) {
  const [selectedDressStyle, setSelectedDressStyle] = useState(
    DressStyles[0].id
  );
  const [selectedTopView, setSelectedTopView] = useState(TopViews[0].id);
  const [attire, setAttire] = useState(null);

  // Set the current attire based on selected DressStyle and TopView
  useEffect(() => {
    const filteredAttire = Attires.find(
      (attire) =>
        attire.dressStyleId === selectedDressStyle &&
        attire.topViewId === selectedTopView
    );
    setAttire(filteredAttire || null);
  }, [selectedDressStyle, selectedTopView, Attires]);

  return (
    <div className="mt-4 container">
      {/* Main Image Display */}
      <div className="h-[500px] w-full">
        <div className="h-full">


          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            loop={true}
            pagination={{
              // dynamicBullets: true,
              clickable: true,
            }}
            modules={[Navigation, Autoplay]}
            className="w-full h-full"
          >
            {DressStyles.map((dress, index) => (
              <SwiperSlide className="relative h-full" key={index}>
                <div
                  onClick={() => setSelectedDressStyle(dress.id)}
                  className={`cursor-pointer h-full flex flex-col items-center relative ${selectedDressStyle === dress.id
                    ? "font-bold text-blue-500"
                    : ""
                    }`}
                >
                  {/* Filter the attire for each dress style and top view */}
                  {Attires.find(
                    (att) =>
                      att.dressStyleId === dress.id &&
                      att.topViewId === selectedTopView
                  )?.images?.[0] ? (
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      pagination={{
                        dynamicBullets: true,
                        clickable: true,
                      }}
                      modules={[Pagination, Navigation, Autoplay]}
                      className="w-full h-full"
                    >
                      {Attires.find(
                        (att) =>
                          att.dressStyleId === dress.id &&
                          att.topViewId === selectedTopView
                      ).images.map((image, imgIndex) => (
                        <SwiperSlide
                          className="relative h-full"
                          key={`image-${imgIndex}`}
                        >
                          <Image
                            src={image.url}
                            alt={`attire-image-${dress.id}-${imgIndex}`}
                            width={150}
                            height={100}
                            className="h-full w-full object-cover rounded-md"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <Skeleton
                        variant="rectangular"
                        className="rounded h-full w-full"
                      />
                    </div>
                  )}

                  {/* Dress style name displayed below the card */}
                  <div className="mt-2 text-center">
                    <span className="text-sm font-medium">{dress.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Top Views */}
      <div className="h-full flex gap-4 mt-4">
        {TopViews.map((top, index) => (
          <div
            key={index}
            onClick={() => setSelectedTopView(top.id)}
            className={`h-24 w-36 cursor-pointer ${selectedTopView === top.id ? "border-2 border-blue-500" : ""
              }`}
          >
            <Image
              src={top.imageUrl}
              height={100}
              width={150}
              alt={`top-view-${top.name}`}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* DressStyle Description */}
      {/* <div className="w-full mt-4">
        <Preview
          value={attire?.dressstyle?.description || "No description available"}
        />
      </div> */}

      {/* Video Section */}
      {/* {attire?.dressstyle?.videoUrl && (
        <div className="grid grid-cols-1 gap-4 mt-4">
          {attire.dressstyle.videoUrl.split(", ").map((video, index) => (
            <div key={index} className="w-full grid grid-cols-2">
              <iframe
                src={video}
                height={240}
                width={400}
                title={`video-${index}`}
              ></iframe>
            </div>
          ))}
        </div>
      )} */}
      <div className="grid grid-cols-1 gap-4 mt-4">
        {Array.isArray(DressStyles) ? (
          DressStyles.map((dress, index) => (
            <div
              key={index}
              className="w-full grid grid-cols-2 gap-4 items-center"
            >
              {/* Video Section */}
              {dress.videoUrl ? (
                <iframe
                  src={dress.videoUrl.split(", ")[0]} // Ensure there's at least one video URL
                  height={240}
                  width={400}
                  title={`video-${index}`}
                ></iframe>
              ) : (
                <div className="w-full h-60 flex items-center justify-center bg-gray-200">
                  <span>No video available</span>
                </div>
              )}

              {/* Description */}
              <div className="p-4 text-left flex align-top justify-start items-start">
                <Preview
                  value={dress.description || "No description available"}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="w-full grid grid-cols-2 gap-4 items-center">
            {/* Handle the case where dressstyle is not an array */}
            {attire?.dressstyle?.videoUrl ? (
              <iframe
                src={attire.dressstyle.videoUrl.split(", ")[0]}
                height={240}
                width={400}
                title="video"
              ></iframe>
            ) : (
              <div className="w-full h-60 flex items-center justify-center bg-gray-200">
                <span>No video available</span>
              </div>
            )}

            <div className="p-4 text-start">
              <Preview
                value={
                  attire?.dressstyle?.description || "No description available"
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
