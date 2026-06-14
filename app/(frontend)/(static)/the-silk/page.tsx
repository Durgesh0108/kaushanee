// import React from "react";
// import AboutSilk from "./_components/AboutSilk";
// import History from "./_components/History";

// export default function TheSilkPage() {
//   return (
//     <div className="container mt-20 gap-y-12 md:gap-y-16">
//       <AboutSilk />
//       <History />
//     </div>
//   );
// }

import React from "react";
import AboutSilk from "./_components/AboutSilk";
import History from "./_components/History";
import SilkTabs from "./_components/SilkTabs";
import Properties from "./_components/Properties";
import TypesOfSilk from "./_components/TypesOfSilk";
import TheMap from "./_components/TheMap";
import SilkWeavingCluster from "./_components/Silk-Weaving-Cluster";
import SilkInIndia from "./_components/SilkInIndia";

export default function TheSilkPage() {
  return (
    <div className="container mx-auto px-4 mt-12 gap-y-12 md:gap-y-16">
      <AboutSilk />
      <SilkInIndia />
      <History />
      <SilkTabs />
      <Properties />
      <TypesOfSilk />
      <TheMap />
      <SilkWeavingCluster />
    </div>
  );
}
