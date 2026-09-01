"use client";
import React from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function MagneticButtonDemo({
  text = "Get in Touch",
  variant = "blue",
  icon = null,
  className = ""
}) {
  const isGreen = variant === "green" || variant === "whatsapp";

  return (
    <div className="flex w-full items-center justify-center">
      <MagneticButton showColor={isGreen ? "#10b981" : "#3b82f6"}>
        <div
          className={`cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg font-medium text-white transition-transform duration-150 ring-1 ring-white/20 ring-offset-1 ring-inset active:scale-98 ${
            isGreen
              ? "bg-linear-to-b from-emerald-500 to-emerald-700 px-6 py-2 ring-offset-emerald-500"
              : "bg-linear-to-b from-blue-500 to-blue-700 px-8 py-2 ring-offset-blue-500"
          } ${className}`}
        >
          {variant === "whatsapp" && <IconBrandWhatsapp className="w-4 h-4 text-white stroke-[2.2]" />}
          {icon}
          <span>{text}</span>
        </div>
      </MagneticButton>
    </div>
  );
}
