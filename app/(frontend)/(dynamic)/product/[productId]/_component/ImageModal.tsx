import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function ImageModal({ showModal, children, closeModal }) {
  if (!showModal) return null;

  return (
    <Dialog open={showModal} onOpenChange={closeModal}>
      <DialogContent className="fixed  h-full w-full max-h-screen max-w-screen-2xl bg-transparent border-transparent flex items-center justify-center">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-black text-3xl z-50"
        >
          <X className="h-8 w-8 font-extrabold" color="white" />
          <span className="sr-only">Close</span>
        </button>
        <div className="w-full h-full ">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
