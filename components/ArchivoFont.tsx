import { Archivo } from "next/font/google";
import React from "react";

const archivo = Archivo({ subsets: ["latin"], weight: ["300", "400", "700"] });

export default function ArchivoFont({ children, ...props }) {
  return (
    <div className={`${archivo.className}`} {...props}>
      {children}
    </div>
  );
}
