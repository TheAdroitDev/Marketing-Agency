"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";
import CoverDemo from "./cover-demo";
import MagneticButtonDemo from "./magnetic-button-demo";

export default function AuroraBackgroundDemo() {
  
// ── COLORS ────────────────────────────────────────────
const C = {
    dark: '#606060',
    body: '#3d3d3d',
    muted: '#6b6b6b',
    accent: '#6c63ff',
    accentLight: '#708775',
    bg: '#fafaf9',
    bgAlt: '#f3f2ef',
    card: '#ffffff',
    border: '#e5e4e0',
}
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
            {/* ── HERO ── */}
            <section className="min-h-[100svh] flex flex-col justify-center px-6 pt-2">
                <div className="max-w-6xl mx-auto w-full">
                    {/* Punchline */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-16">
                        <div className="space-y-1 flex-1">
                            {['Your Ideas.', 'Our Craft.', <CoverDemo/>].map((line, i) => (
                                <div key={i} className="overflow-hidden">
                                    <motion.h1
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                        className="font-bold leading-[0.95] tracking-tight"
                                        style={{
                                            fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
                                            color: i === 2 ? C.accent : C.dark
                                        }}
                                    >
                                        {line}
                                    </motion.h1>
                                </div>
                            ))}
                        </div>

                        {/* Hero illustration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="hidden lg:block flex-shrink-0"
                        >
                            <Image src="/svgs/undraw_collaboration_hkrb.svg" alt="Team collaboration" width={340} height={260} className="select-none" priority />
                        </motion.div>
                    </div>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.85 }}
                        className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6"
                    >
                        <div className="flex flex-col items-start gap-6 max-w-md">
                            <p className="text-[15px] sm:text-base leading-[1.75]" style={{ color: C.body }}>
                                We build websites, run ad campaigns on YouTube, Instagram & Google,
                                and help your brand grow online. Simple as that.
                            </p>
                            <a href="#contact">
                                <MagneticButtonDemo text="Book Call" />
                            </a>
                        </div>
                        <div className="flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase font-semibold" style={{ color: C.accentLight }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for projects
                        </div>
                    </motion.div>
                </div>
            </section>
      </motion.div>
    </AuroraBackground>
  );
}
