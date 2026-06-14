// import prismadb from "@/lib/prisma";
// import { revalidatePath } from "next/cache";
// import { NextResponse } from "next/server";

// export async function PATCH(req: Request) {
//   try {
//     // Fetch all products that have an occassionId (i.e., where occassion is assigned)
//     const productsWithOccasion = await prismadb.product.findMany({
//       where: {
//         occassionId: { not: null },
//       },
//       select: {
//         id: true,
//         occassionId: true, // We only need product ID and occassion ID
//       },
//     });

//     // Iterate through the products and move the occassionId to ProductOnOccasion
//     for (const product of productsWithOccasion) {
//       const { id: productId, occassionId } = product;

//       // Create a new entry in the ProductOnOccasion join table
//       await prismadb.productOnOccasion.create({
//         data: {
//           productId: productId,
//           occassionId: occassionId,
//         },
//       });

//       // Optional: Clear occassionId in the Product model after it's moved to the join table
//     //   await prismadb.product.update({
//     //     where: { id: productId },
//     //     data: {
//     //       occassionId: null, // Clear the occassionId field after migration
//     //     },
//     //   });

//       console.log(`Migrated product ${productId} with occasion ${occassionId}`);
//     }

//     console.log("Migration completed successfully.");
//     return new NextResponse("Migration completed successfully.", { status: 200 });
//   } catch (error) {
//     console.error("[OCCASION_MIGRATION_ERROR]", error);
//     return new NextResponse("Internal error during migration", { status: 500 });
//   }
// //   finally {
// //     await prismadb.$disconnect();
// //   }
// }
import prismadb from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    // Fetch all colors
    const colors = await prismadb.color.findMany({});

    // Initialize a counter for the order
    let orderCounter = 1;

    // Iterate through the colors and update the order sequentially
    for (const color of colors) {
      await prismadb.color.update({
        where: {
          id: color.id,
        },
        data: {
          order: orderCounter,
        },
      });

      // Increment the counter for the next color
      orderCounter++;
    }

    console.log("Migration completed successfully.");
    return new NextResponse("Migration completed successfully.", {
      status: 200,
    });
  } catch (error) {
    console.error("[COLOR_ORDER_MIGRATION_ERROR]", error);
    return new NextResponse("Internal error during migration", { status: 500 });
  }
}
