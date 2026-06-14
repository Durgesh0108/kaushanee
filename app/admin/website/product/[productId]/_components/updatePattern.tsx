// @ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import MultiSelect, { Option } from "@/components/ui/MultiSelect";
import { toast } from "react-hot-toast";
import { Input } from "@/components/ui/input";

export const PatternProductForm = ({ initialdata, Pattern }) => {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);
  //   const [optionSelected, setOptionSelected] = useState<Option[]>([]);

  const form = useForm();

  //   useEffect(() => {
  //     if (initialdata.occassionIds) {
  //       const selectedOptions = initialdata.occassionIds.map((id) => ({
  //         value: id,
  //         label: Pattern.find((occ) => occ.id === id)?.name || "",
  //       }));
  //       setOptionSelected(selectedOptions);
  //     }
  //   }, [initialdata, Pattern]);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const onSubmit = async () => {
    const data = {
      patternId: selectedPattern === null ? null : selectedPattern,
    };

    console.log({ data });

    try {
      setLoading(true);
      await axios.patch(`/api/website/product/${initialdata.id}`, data);
      toggleEdit();
      toast.success("Product Updated");
      // Reload or update the necessary data
      location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  //   const occassionOptions = Occassion.map((occ) => ({
  //     value: occ.id,
  //     label: occ.name,
  //   }));

  const handlePatternChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPattern(e.target.value);
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="text-sm lg:text-base font-medium flex items-center justify-between">
        Product Pattern
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            "Cancel"
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" /> Edit Details
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className="relative mt-2">
          {/* <MultiSelect
            options={occassionOptions}
            onChange={handleChange}
            value={optionSelected}
            isSelectAll
            menuPlacement="bottom"
            disabled
          /> */}
          <Input disabled value={initialdata.pattern.name} />
        </div>
      )}
      {isEditing && (
        <div className="mb-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label>Pattern</label>
                <select
                  name="category"
                  id="category"
                  // className="ring-2 ring-black p-2 rounded-lg hover:ring hover:ring-gray-800 "
                  className="p-2 border-black border-[1px] rounded-lg"
                  onChange={handlePatternChange}
                >
                  {Pattern.length === 0 ? (
                    <option>No Pattern Available</option>
                  ) : (
                    <option>Please Select Pattern</option>
                  )}
                  {Pattern.map((pattern) => (
                    <option
                      value={pattern.id}
                      key={pattern.id}
                      className="px-4 py-1"
                    >
                      {pattern.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button disabled={loading} type="submit" variant="success">
                Save
              </Button>
              <Button
                disabled={loading}
                variant="destructive"
                type="button"
                onClick={toggleEdit}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
