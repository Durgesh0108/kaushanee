import prismadb from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prismadb.product.findUnique({
      where: {
        id: params.productId,
      },
      include: {
        category: true,
        color: true,
        description: true,
        images: true,
        occassion: true,
        pattern: true,
        type: true,
        blouseColor: true,
        fabric: true,
        palluColor: true,
        SubType: true,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prismadb.product.delete({
      where: {
        id: params.productId,
      },
    });
    revalidatePath("/", "layout");
    return NextResponse.json(product);
  } catch (error) {
    console.log("[Product_product]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

// export async function PATCH(
//   req: Request,
//   { params }: { params: { productId: string } }
// ) {
//   try {
//     const body = await req.json();
//     // const images = body.images;

//     // if (body.occassionIds > 0 || body.occassionIds === 0) {
//     //   await prismadb.productOnOccasion.deleteMany({
//     //     where: {
//     //       productId: params.productId,
//     //     },
//     //   });
//     //   // Map the image URLs to objects that match the Image model
//     //   const occassions = body.occassionIds.map((id: any) => ({
//     //     occassionId: id,
//     //     productId: params.productId,
//     //   }));

//     //   // Create the images using Prisma's createMany function
//     //   const newoccassions = await prismadb.productOnOccasion.createMany({
//     //     data: occassions,
//     //   });

//     //   return NextResponse.json(newoccassions);
//     // }


//     const product = await prismadb.product.update({
//       where: {
//         id: params.productId,
//       },
//       data: {
//         // occassions: {
//         //   connect: body.occassionIds?.map((id) => ({ occassionId: id })),
//         // },
//         ...body,
//       },
//       include: {
//         category: true,
//         color: true,
//         description: true,
//         images: {
//           orderBy: {
//             position: "asc",
//           },
//         },
//         occassion: true,
//         pattern: true,
//         type: true,
//         fabric: true,
//         blouseColor: true,
//         palluColor: true,
//         SubType: true,
//         blousePattern: true,
//         border: true,
//         borderColor: true,
//         buttiType: true,
//         palluMotif: true,
//         sareeMotif: true,
//         weave: true,
//         weaveType: true,
//         zari: true,
//         zariColor: true,
//       },
//     });
//     revalidatePath("/", "layout");
//     return NextResponse.json(product);
//   } catch (error) {
//     console.log("[BILLBOARD_PATCH]", error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const body = await req.json();

    // Check if occasionIds is present and is an array
    if (Array.isArray(body.occassionIds) && body.occassionIds.length > 0) {
      // Delete existing associations
      await prismadb.productOnOccasion.deleteMany({
        where: {
          productId: params.productId,
        },
      });

      // Create new associations
      const occassions = body.occassionIds.map((id: string) => ({
        occassionId: id,
        productId: params.productId,
      }));

      const newOccassions = await prismadb.productOnOccasion.createMany({
        data: occassions,
      });

      return NextResponse.json(newOccassions);
    }

    // If occasionIds is not present or is empty, update other product fields
    const product = await prismadb.product.update({
      where: {
        id: params.productId,
      },
      data: {
        // Include all other fields except occasionIds
        ...body,
        // occassions: {
        //   disconnect: true, // To remove any previous associations
        // },
      },
      include: {
        category: true,
        color: true,
        description: true,
        images: {
          orderBy: {
            position: "asc",
          },
        },
        occassion: true,
        pattern: true,
        type: true,
        fabric: true,
        blouseColor: true,
        palluColor: true,
        SubType: true,
        blousePattern: true,
        border: true,
        borderColor: true,
        buttiType: true,
        palluMotif: true,
        sareeMotif: true,
        weave: true,
        weaveType: true,
        zari: true,
        zariColor: true,
      },
    });

    // Revalidate the path after the update
    revalidatePath("/", "layout");
    return NextResponse.json(product);
  } catch (error) {
    console.error("[BILLBOARD_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
