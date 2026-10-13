'use client'

import React from 'react'
import Image from 'next/image'

export function AceternityCallButton({
  text = "Book a Free Call",
  href = "#contact",
  calLink,
  className = "",
  avatarSrc = "https://pbs.twimg.com/profile_images/2078349741495336960/dUbXTLtT_400x400.jpg",
  variant = "active", // "active" | "disabled"
}) {
  const isActive = variant === "active"

  return (
    <a
      href={isActive ? href : undefined}
      data-cal-link={isActive ? calLink : undefined}
      className={`group relative flex w-fit cursor-pointer items-center gap-2 rounded-lg border py-2 pr-4 pl-11 tracking-tight select-none overflow-hidden transition-all duration-300 ${
        isActive
          ? "border-white/20 bg-black text-white hover:border-white/40 shadow-md"
          : "border-zinc-800/80 bg-[#121214] text-zinc-500 cursor-not-allowed opacity-85"
      } ${className}`}
    >
      {/* Animated Sliding Box */}
      <div
        data-slot="button-box"
        className={`absolute inset-y-0 left-1 z-30 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[6px] transition-all duration-400 ease-out ${
          isActive
            ? "bg-[#fab005] sm:bg-[#fcc419] group-hover:left-[calc(100%-2.25rem)] group-hover:rotate-180 group-hover:transform shadow-xs"
            : "bg-zinc-700/80"
        }`}
      >
        {/* 5x5 Dot Matrix (Visible in Idle state) */}
        <div className={`flex flex-col gap-[1.5px] ${isActive ? "group-hover:hidden" : ""}`}>
          <div className="flex gap-[1.5px]">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
          </div>
          <div className="flex gap-[1.5px]">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
          </div>
          <div className="flex gap-[1.5px]">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
          </div>
          <div className="flex gap-[1.5px]">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
          </div>
          <div className="flex gap-[1.5px]">
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white duration-200 ease-linear shadow-xs" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
            <span className="inline-block size-[3px] shrink-0 rounded-full bg-white/25" />
          </div>
        </div>

        {/* Avatar (Revealed when box slides to the right and flips 180) */}
        {isActive && (
          <div className="hidden rotate-180 rounded-[5px] size-full overflow-hidden transition-all duration-400 ease-out group-hover:block">
            <Image
              alt="Avatar"
              width={32}
              height={32}
              className="size-full object-cover"
              src={avatarSrc}
            />
          </div>
        )}
      </div>

      {/* Hover border sweep / clip-path */}
      {isActive && (
        <div className="absolute -inset-px rounded-lg bg-white/20 transition-[clip-path] duration-400 ease-out [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0_0%_0_0)] pointer-events-none" />
      )}

      {/* Button text that translates left on hover */}
      <span
        className={`inline-block text-[15px] font-medium transition-transform duration-400 ${
          isActive
            ? "text-white group-hover:-translate-x-8"
            : "text-zinc-400"
        }`}
      >
        {text}
      </span>
    </a>
  )
}

// Backward compatibility exports
export const MatrixCallButton = AceternityCallButton
export function MatrixPaidCallButton(props) {
  return <AceternityCallButton variant="disabled" text="Book a Paid Call" {...props} />
}
