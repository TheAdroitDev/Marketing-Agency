"use client";
import React from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";

export default function MagneticButtonDemo({ text = "Get in Touch" }) {
  const handleClick = () => {
   
  };
  return (
    <div className="flex  w-full items-center justify-center">
      <MagneticButton>
        <button
          onClick={handleClick}
          className="cursor-pointer rounded-lg bg-linear-to-b from-blue-500 to-blue-700 px-8 py-2 font-medium text-white ring-1 ring-white/20 ring-offset-1 ring-offset-blue-500 transition-transform duration-150 ring-inset active:scale-98">
       {text}
        </button>
      </MagneticButton>
    </div>
  );
}
