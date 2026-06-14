// import React from "react";

// export default function History() {
//   return (
//     <div>
//       <div></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div></div>
//         <div>
//           <p>
//             The Chinese Empress Who Accidentally Discovered Silk Legend says
//             that silk was discovered around 2700 BC in ancient China. The story
//             of the discovery of silk is recorded in writing by Confucius, one of
//             China’s most famous philosophers and politicians. According to his
//             tale, the Chinese Empress Leizu (also known as Xi Ling Shi)
//             discovered silk by accident when a silkworm cocoon dropped into her
//             cup of tea. Hot water softens the silk fiber that the silkworm
//             cocoon is made of, and thus the cocoon began to lose its
//             cohesiveness. When Leizu lifted the cocoon from her teacup, the end
//             of the silk thread was loosened, and the cocoon began to unravel.
//             Leizu noticed that the cocoon was made out of a single long strand
//             of silk, and she had the innovative idea of weaving this fine thread
//             into a piece of fabric.
//           </p>
//           <p>
//             Empress Leizu, wife of the Yellow Emperor Huangdi, discovered silk
//             production in ancient China, pioneering sericulture. She studied
//             silkworms, cultivated Mulberry trees for their food, and invented
//             tools like the silk reel and loom. This led to a profitable silk
//             industry, initially practiced exclusively by women. Despite the
//             legendary tale of a cocoon in her teacup, Leizu became revered as
//             the Goddess of the Silkworm, with altars dedicated to her across
//             China, like in Beijing’s Beihai Park.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";

export default function History() {
  return (
    <div className="mb-12">
      <h2 className="flex justify-center text-3xl font-bold mb-4">
        The History of Silk
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-auto">
          <Image
            src="https://res.cloudinary.com/dbeuowl0x/image/upload/v1728974310/M_6_kok4pu.jpg"
            alt="The Silk Image"
            height={1000}
            width={1000}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="text-justify leading-relaxed text-xl">
          <p>
            According to legend, silk was discovered around 2700 BC in ancient
            China. The famous philosopher Confucius recorded that the Chinese
            Empress Leizu (also known as Xi Ling Shi) discovered silk by
            accident when a silkworm cocoon fell into her tea. As the hot water
            softened the silk fiber, she noticed it was made of a single long
            strand.
          </p>
          <p className="mt-4">
            Leizu had the innovative idea of weaving this fine thread into
            fabric. As the wife of the Yellow Emperor Huangdi, Leizu pioneered
            sericulture (silk farming), studied silkworms, and invented tools
            for silk production, like the silk reel and loom. Her work helped
            establish silk as a highly profitable industry in China, initially
            practiced exclusively by women.
          </p>
        </div>
      </div>
    </div>
  );
}
