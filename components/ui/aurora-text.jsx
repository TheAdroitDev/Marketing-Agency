"use client";
import React, { memo } from "react"

export const AuroraText = memo(({
  children,
  className = "",
  colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed = 1
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent group-hover/cover:[background-image:none!important] group-hover/cover:[color:white!important] group-hover/cover:[-webkit-text-fill-color:white!important] transition-all duration-200"
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
          WebkitBackgroundClip: "text",
          animationDuration: `${10 / speed}s`,
        }}
        aria-hidden="true">
        {children}
      </span>
    </span>
  );
})

AuroraText.displayName = "AuroraText"
