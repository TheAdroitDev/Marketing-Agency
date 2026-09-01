"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import CoverDemo from "./cover-demo";
import MagneticButtonDemo from "./magnetic-button-demo";

export default function AuroraBackgroundDemo() {
  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      {/* ── BACKGROUND CLOUD IMAGE LAYER ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/thumbnail-4.png"
          alt="Cloudscape sky background"
          fill
          priority
          quality={100}
          className="object-cover object-center md:object-[75%_35%]"
        />

        {/* Bottom smooth multi-stop melt into page base (#fafaf9) */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 bg-gradient-to-t from-[#fafaf9] via-[#fafaf9]/85 via-35% to-transparent" />
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          {/* Main Headline */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
            <div className="space-y-1 flex-1">
              {['Your Ideas.', 'Our Craft.', <CoverDemo key="cover" />].map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`font-bold leading-[0.95] tracking-tight ${
                      i === 2 ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-900"
                    }`}
                    style={{
                      fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
                    }}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>
          </div>

          {/* Subtitle & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-14 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8"
          >
            <div className="flex flex-col items-start gap-6 max-w-xl">
              <p className="text-lg sm:text-[21px] leading-[1.65] text-zinc-900 font-normal">
                We build websites and digitally market across Google, Youtube & Meta
                and help your brand grow online.
              </p>
              <div>
                <a href="#contact">
                  <MagneticButtonDemo text="Book a Call" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
