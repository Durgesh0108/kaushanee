import React from "react";
import {FixedSizeList} from 'react-window'

const data = Array.from({ length: 1000 }, (_, index) => index);

export default function List() {
  return (
    <>
      <ul className="w-48 h-96 border-2 border-black overflow-auto mt-16">
        {data?.map((row) => (
          <li key={row}>{row}</li>
        ))}
      </ul>
    </>
  );
}
