// // @ts-nocheck

// "use client";

// import { Button } from "@/components/ui/button";
// import { Pencil, Plus } from "lucide-react";
// import React, { useEffect, useState } from "react";

// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import axios from "axios";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";

// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "react-hot-toast";
// import { Product } from "@prisma/client";
// import MultiSelect, { Option } from "@/components/ui/MultiSelect";

// const formSchema = z.object({
//   name: z.string().min(1),
// });

// type OccassionProductForm = z.infer<typeof formSchema>;

// export const OccassionProductForm = ({ initialdata, Occassion }) => {
//   const [loading, setLoading] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [optionSelected, setOptionSelected] = useState<Option[] | null>();

//   const form = useForm<OccassionProductForm>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: initialdata.name,
//     },
//   });

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   const onSubmit = async (values: OccassionProductForm) => {
//     const data = {
//       occassionIds: optionSelected,
//     };

//     console.log(optionSelected);

//     try {
//       setLoading(true);
//       const response = await axios.patch(
//         `/api/website/product/${initialdata?.id}`,
//         data
//       );
//       toggleEdit();
//       location.reload();
//       toast.success("Product Updated");
//     } catch (error: any) {
//       console.log(error);
//       toast.error("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const occassionOptions = [];
//   // console.log({ Districts });

//   for (let i = 0; i < Occassion.length; i++) {
//     // console.log(i);
//     let occassion = {
//       value: Occassion[i].id,
//       label: Occassion[i].name,
//     };

//     occassionOptions.push(occassion);
//   }

//   const handleChange = (selected: Option[]) => {
//     setOptionSelected(selected);
//     // sendDataToParent(optionSelected);
//   };

//   //   const handleSave = () => {
//   //     sendDataToParent(optionSelected);
//   //     toggleEdit();
//   //   };

//   return (
//     // <Card className={"flex flex-col gap-6 p-4 border-2"}>
//     <div className="border bg-slate-100 rounded-md p-4 ">
//       <div className="text-sm lg:text-base font-medium flex items-center justify-between">
//         Product Occassion
//         <Button onClick={toggleEdit} variant="ghost">
//           {isEditing && <>Cancel</>}

//           {!isEditing && initialdata && (
//             <>
//               <Pencil className="h-4 w-4 mr-2" />
//               Edit Details
//             </>
//           )}
//         </Button>
//       </div>
//       {!isEditing && (
//         <div className="relative mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="flex flex-col gap-2">
//             <label>Occassion</label>
//             <Input
//               disabled={true}
//               placeholder="Occassion name"
//               value={initialdata.occassion ? initialdata.occassion.name : ""}
//             />
//           </div>
//         </div>
//       )}
//       {isEditing && (
//         <div className="mb-4">
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(onSubmit)}
//               className="space-y-4 w-full"
//             >
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {/* Occassion */}
//                 <div className="flex flex-col gap-2">
//                   <FormLabel>Occassion</FormLabel>
//                   <MultiSelect
//                     key="example_id"
//                     options={occassionOptions}
//                     onChange={handleChange}
//                     value={optionSelected}
//                     isSelectAll={true}
//                     menuPlacement={"bottom"}
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <div className="flex gap-2">
//                   <Button
//                     disabled={loading}
//                     className="ml-auto"
//                     type="submit"
//                     variant={"success"}
//                   >
//                     Save
//                   </Button>
//                   <Button
//                     disabled={loading}
//                     className="ml-auto"
//                     variant="destructive"
//                     type="button"
//                     onClick={() => setIsEditing(false)}
//                   >
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </Form>
//         </div>
//       )}
//     </div>
//     // </Card>
//   );
// };
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

export const OccassionProductForm = ({ initialdata, Occassion }) => {
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [optionSelected, setOptionSelected] = useState<Option[]>([]);

  const form = useForm();

  useEffect(() => {
    if (initialdata.occassionIds) {
      const selectedOptions = initialdata.occassionIds.map((id) => ({
        value: id,
        label: Occassion.find((occ) => occ.id === id)?.name || "",
      }));
      setOptionSelected(selectedOptions);
    }
  }, [initialdata, Occassion]);

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const onSubmit = async () => {
    const data = {
      occassionIds: optionSelected.map((option) => option.value),
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

  const occassionOptions = Occassion.map((occ) => ({
    value: occ.id,
    label: occ.name,
  }));

  const handleChange = (selected: Option[]) => {
    setOptionSelected(selected);
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4">
      <div className="text-sm lg:text-base font-medium flex items-center justify-between">
        Product Occasion
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
          <Input
            disabled
            value={
              initialdata.occassions?.map((occ) => occ.occasion.name).join(", ") ||
              "No occasions available"
            }
          />
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
                <label>Occasion</label>
                <MultiSelect
                  options={occassionOptions}
                  onChange={handleChange}
                  value={optionSelected}
                  isSelectAll
                  menuPlacement="bottom"
                />
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
