// @ts-nocheck

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import FilterPanel from "@/components/FRONTEND/FilterPanel";
import ProductListing from "@/components/ui/ProductListing";
import NoProduct from "@/components/ui/NoProduct";

const MAX = 20000;
const MIN = 0;
const marks = [
  { value: MIN, label: "" },
  { value: MAX, label: "" },
];

export default function BestPriceListPage({ bestPrice, products, category }) {
  const params = useParams();

  const [filters, setFilters] = useState({
    fabric: [],
    weave: [],
    type: [],
    occassion: [],
    color: [],
    zari: [],
    palluMotif: [],
    border: [],
    category: [],
    pattern: [],
    subtype: [],
    priceRange: [MIN, MAX],
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const updatedFilter = prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((item) => item !== value)
        : [...prevFilters[filterType], value];
      return { ...prevFilters, [filterType]: updatedFilter };
    });
  };

  const handlePriceRangeChange = (_, newValue) => {
    setFilters((prevFilters) => ({ ...prevFilters, priceRange: newValue }));
  };

  const handleRemoveFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].filter((item) => item !== value),
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      fabric: [],
      weave: [],
      type: [],
      occassion: [],
      color: [],
      zari: [],
      palluMotif: [],
      border: [],
      category: [],
      pattern: [],
      subtype: [],
      priceRange: [MIN, MAX],
    });
  };

  const filteredProducts = products.filter((product) => {
    const filterConditions = [
      !filters.fabric.length || filters.fabric.includes(product.fabric?.name),
      !filters.weave.length || filters.weave.includes(product.weave?.name),
      !filters.type.length || filters.type.includes(product.type?.name),
      !filters.occassion.length ||
        filters.occassion.includes(product.occassion?.name),
      !filters.color.length || filters.color.includes(product.color?.name),
      !filters.zari.length || filters.zari.includes(product.zari?.name),
      !filters.palluMotif.length ||
        filters.palluMotif.includes(product.palluMotif?.name),
      !filters.border.length || filters.border.includes(product.border?.name),
      !filters.category.length ||
        filters.category.includes(product.category?.name),
      !filters.pattern.length ||
        filters.pattern.includes(product.pattern?.name),
      !filters.subtype.length ||
        filters.subtype.includes(product.SubType?.name),
      product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1],
    ];

    return filterConditions.every((condition) => condition);
  });

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const toggleFilter = () => setFilterIsOpen((current) => !current);

  return (
    <div className=" no-scrollbar z-10">
      {/* <div className=" ">
        {Occassion.bannerUrl && (
          <Image
            src={Occassion.bannerUrl}
            alt={Occassion.name}
            width={1000}
            height={1}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
      </div> */}
      <div className="">
        <div className="grid grid-cols-8 container  ">
          <FilterPanel
            results={products}
            filters={filters}
            setFilters={setFilters}
            handleResetFilters={handleResetFilters}
          />
          <div className="col-span-6 p-4  ">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold m-4 ml-0 uppercase px-4">
                {bestPrice?.name}
              </h1>
            </div>
            {/* <div className="mb-4 flex flex-wrap gap-2 px-4 ">
              {Object.entries(filters).map(([filterType, values]) =>
                values.map((value) => (
                  <div
                    key={`${filterType}-${value}`}
                    className="bg-gray-200 p-2 rounded flex items-center"
                  >
                    <span>{value}</span>
                    <button
                      className="ml-2 text-red-500"
                      onClick={() => handleRemoveFilter(filterType, value)}
                    >
                      &times;
                    </button>
                  </div>
                ))
              )}
            </div> */}
            <div>
              {filteredProducts.length > 0 ? (
                <ProductListing products={filteredProducts} />
              ) : (
                <div className="py-12 px-4 h-screen overflow-auto no-scrollbar">
                  <NoProduct />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
