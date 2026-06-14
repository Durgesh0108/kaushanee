import React from "react";
import DressStyleComponent from "./_components/DressStyle";
import prismadb from "@/lib/prisma";

export default async function StylesPage() {
  const dressStyles = await prismadb.dressStyle.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const topViews = await prismadb.topView.findMany({
    orderBy: {
      createdAt: "asc",
    },
  });
  const attires = await prismadb.attire.findMany({
    include: {
      dressstyle: true,
      topView: true,
      images: {
        orderBy: {
          position: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return (
    <div className="mt-8">
      <DressStyleComponent
        DressStyles={dressStyles}
        TopViews={topViews}
        Attires={attires}
      />
    </div>
  );
}
