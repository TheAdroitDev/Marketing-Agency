"use client";
import React from "react";
import { Cover } from "@/components/ui/cover";
import { AuroraText } from "@/components/ui/aurora-text";

export default function CoverDemo() {
  return (
    <span className="block">
      <Cover>
        {(hovered) =>
          hovered ? (
            <span className="text-white font-bold">Real Results</span>
          ) : (
            <AuroraText>Real Results</AuroraText>
          )
        }
      </Cover>
    </span>
  );
}
