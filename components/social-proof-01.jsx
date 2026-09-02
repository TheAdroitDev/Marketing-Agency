'use client'

import { LogosCarousel } from "@/components/logos-carousel"
import Image from "next/image"

export default function SocialProof01() {
  return (
    <div className="w-full overflow-hidden py-10 sm:py-14 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-lg sm:text-xl md:text-[22px] font-medium text-zinc-800 mb-8 sm:mb-10 tracking-tight">
          Trusted by high-growth brands and modern businesses
        </h2>

        {/* 3 Logos at a time: Desktop Carousel & Mobile Grid */}
        <div className="relative">
          <div className="hidden sm:block">
            <LogosCarousel columnCount={3} className="py-2 text-zinc-800 [--column-count:3]">
              {COMPANY_LIST.map((company) => (
                <div key={company.name} className="flex items-center justify-center h-18 px-6">
                  <company.logo />
                </div>
              ))}
            </LogosCarousel>
          </div>

          <div className="grid grid-cols-3 sm:hidden gap-3 items-center justify-items-center">
            {COMPANY_LIST.slice(0, 3).map((company) => (
              <div key={company.name} className="flex items-center justify-center h-14 w-full px-1">
                <company.logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const COMPANY_LIST = [
  {
    name: "Vastu Mentor",
    logo: function () {
      return (
        <div className="flex items-center justify-center h-full px-2">
          <Image
            src="/images/vm.png"
            alt="Vastu Mentor"
            width={180}
            height={55}
            priority
            className="h-10 sm:h-12 w-auto object-contain max-w-[170px]"
          />
        </div>
      );
    },
  },
  {
    name: "MuskySnax",
    logo: function () {
      return (
        <div className="flex items-center justify-center h-full px-2">
          <Image
            src="/images/musky.webp"
            alt="MuskySnax"
            width={180}
            height={55}
            priority
            className="h-10 sm:h-12 w-auto object-contain max-w-[170px]"
          />
        </div>
      );
    },
  },
  {
    name: "Razorpay",
    logo: function () {
      return (
        <div className="flex items-center justify-center h-full px-2">
          <Image
            src="/images/razorpay.png"
            alt="Razorpay"
            width={180}
            height={55}
            priority
            className="h-9 sm:h-11 w-auto object-contain max-w-[175px]"
          />
        </div>
      );
    },
  },
  {
    name: "Shopify",
    logo: function () {
      return (
        <div className="flex items-center justify-center h-full px-2">
          <Image
            src="/images/sfy.png"
            alt="Shopify"
            width={180}
            height={55}
            priority
            className="h-9 sm:h-11 w-auto object-contain max-w-[165px]"
          />
        </div>
      );
    },
  },
  {
    name: "Google Ads",
    logo: function () {
      return (
        <div className="flex items-center justify-center gap-2.5 h-full px-2">
          <Image
            src="/images/gads.png"
            alt="Google Ads Icon"
            width={44}
            height={44}
            priority
            className="h-8 sm:h-9 w-auto object-contain"
          />
          <div className="flex items-center text-[18px] sm:text-[20px] font-bold tracking-tight text-[#3c4043]">
            <span>Google</span>
            <span className="font-normal text-[#5f6368] ml-1">Ads</span>
          </div>
        </div>
      );
    },
  },
  {
    name: "Meta",
    logo: function () {
      return (
        <div className="flex items-center justify-center h-full px-2">
          <Image
            src="/images/meta-2.png"
            alt="Meta"
            width={200}
            height={60}
            priority
            className="h-10 sm:h-12.5 w-auto object-contain max-w-[175px]"
          />
        </div>
      );
    },
  },
];
