import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[90rem] grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
import React from "react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { AnimatedListDemo } from "@/components/example/animated-list-demo"
import { AnimatedList } from "./animated-list";
import { Check, ShoppingBag } from "lucide-react";
import { useRef, forwardRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <ShoppingBag className="h-6 w-6 text-blue-500 shrink-0" />
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Premium Jet Black Jean
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          ₹999 - Checkout
        </p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shrink-0 flex items-center justify-center text-white text-xs">
          ₹
        </div>
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shrink-0 flex items-center justify-center">
          <Check className="h-4 w-4 text-white" />
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          Order confirmed! Tracking sent
        </p>
      </motion.div>
    </motion.div>
  );
};


const SkeletonTwo = () => {
  const notifications = [
    {
      name: "Order Placed",
      description: "theadroitdev",
      time: "2m ago",
      icon: "📦",
      color: "#4F46E5",
    },
    {
      name: "New Payment",
      description: "₹2,499",
      time: "5m ago",
      icon: "💸",
      color: "#10B981",
    },
    {
      name: "AWB Generated",
      description: "Success",
      time: "7m ago",
      icon: "🧾",
      color: "#10B981",
    },
    {
      name: "Shipped",
      description: "Your Website #892",
      time: "12m ago",
      icon: "🚚",
      color: "#F59E0B",
    },
    {
      name: "Delivered",
      description: "Order completed",
      time: "1h ago",
      icon: "✅",
      color: "#06B6D4",
    },
  ];

  const Notification = ({ name, description, icon, color, time }) => {
    return (
      <div
        className={cn(
          "relative w-full cursor-pointer overflow-hidden rounded-2xl p-3",
          "transition-all duration-200 ease-in-out hover:scale-[102%]",
          "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05)]",
          "dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)]"
        )}
      >
        <div className="flex flex-row items-center gap-3">
          <div
            className="flex size-8 items-center justify-center rounded-xl"
            style={{ backgroundColor: color }}
          >
            <span className="text-sm">{icon}</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <div className="flex flex-row items-center text-sm font-medium dark:text-white">
              <span className="text-xs sm:text-sm">{name}</span>
              <span className="mx-1 text-xs">·</span>
              <span className="text-xs text-gray-500">{time}</span>
            </div>
            <p className="text-xs font-normal text-gray-500 dark:text-white/60">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] overflow-hidden">
      <AnimatedList delay={2000} className="w-full">
        {notifications.map((item, idx) => (
          <Notification {...item} key={`notification-${idx}`} />
        ))}
      </AnimatedList>
    </div>
  );
};


const SkeletonThree = () => {
  const containerRef = useRef(null);
  const customerRef = useRef(null);
  const cartRef = useRef(null);
  const razorpayRef = useRef(null);
  const bankRef = useRef(null);
  const successRef = useRef(null);

  const Circle = forwardRef(({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 border-neutral-200 dark:border-white/[0.2] bg-white dark:bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className
        )}
      >
        {children}
      </div>
    );
  });

  Circle.displayName = "Circle";

  return (
    <div
      ref={containerRef}
      className="relative flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] rounded-lg overflow-hidden items-center justify-center"
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-6 p-6">
        {/* Left side - Customer & Cart */}
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={customerRef}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Circle>
          <Circle ref={cartRef}>
            <ShoppingBag className="h-5 w-5 text-blue-500" />
          </Circle>
        </div>

        {/* Center - Razorpay Gateway */}
        <div className="flex flex-col justify-center">
          <Circle ref={razorpayRef} className="size-16">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <path
                d="m22.436 0-11.91 7.773-1.174 4.276 6.625-4.297L11.65 24h4.391l6.395-24zM14.26 10.098 3.389 17.166 1.564 24h9.008l3.688-13.902Z"
                fill="#3395FF"
                strokeWidth="1"
              />
            </svg>
          </Circle>
        </div>

        {/* Right side - Bank & Success */}
        <div className="flex flex-col justify-center gap-4">
          <Circle ref={bankRef}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
          </Circle>
          <Circle ref={successRef}>
            <Check className="h-5 w-5 text-green-500" />
          </Circle>
        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={customerRef}
        toRef={razorpayRef}
        gradientStartColor="#3395FF"
        gradientStopColor="#5DADE2"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cartRef}
        toRef={razorpayRef}
        gradientStartColor="#48C9B0"
        gradientStopColor="#58D68D"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={razorpayRef}
        toRef={bankRef}
        gradientStartColor="#3395FF"
        gradientStopColor="#5DADE2"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={razorpayRef}
        toRef={successRef}
        gradientStartColor="#48C9B0"
        gradientStopColor="#58D68D"
      />
    </div>
  );
};




const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  const techStack = [
    {
      name: "Next.js",
      logo: (
        <div className="text-3xl mb-2">▲</div>
      ),
      tag: "Framework",
      tagColor: "border-black bg-black/10 text-black dark:bg-white/10 dark:text-white dark:border-white"
    },
    {
      name: "MongoDB",
      logo: (
        <img
          src="/svgs/mongoDb.svg"
          alt="MongoDB"
          className="h-18 w-18 mb-2"
        />
      ),
      tag: "Database",
      tagColor: "border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600"
    },
    {
      name: "AWS",
      logo: (
        <img
          src="/svgs/aws.svg"
          alt="AWS"
          className="h-8 w-8 mb-2"
        />
      ),
      tag: "Cloud",
      tagColor: "border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600"
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      {techStack.map((tech, idx) => (
        <motion.div
          key={idx}
          variants={idx === 0 ? first : idx === 2 ? second : {}}
          className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
          {tech.logo}
          <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-2">
            {tech.name}
          </p>
          <p className={cn(
            "border text-xs rounded-full px-2 py-0.5 mt-4",
            tech.tagColor
          )}>
            {tech.tag}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};


const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">
          A
        </div>
        <p className="text-xs text-neutral-500">
          Can you add inventory tracking and analytics to the admin dashboard?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-500">
          Absolutely! Custom dashboard with real-time metrics coming up.
        </p>
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shrink-0 flex items-center justify-center text-white text-xs font-bold">
          D
        </div>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "E-Commerce Solutions",
    description: (
      <span className="text-sm">
        Full-stack e-commerce platforms with Payment Gateway integration and logistics.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <ShoppingBag className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Real-Time Order Tracking",
    description: (
      <span className="text-sm">
        Automated workflows with live order status updates and email notifications.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Payment Gateway Integration",
    description: (
      <span className="text-sm">
        Seamless Razorpay integration with secure checkout and transaction management.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Modern Tech Stack",
    description: (
      <span className="text-sm">
        Built with Next.js, MongoDB, Tailwind CSS, and Framer Motion for performance.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Custom Admin Dashboards",
    description: (
      <span className="text-sm">
        Complete order management, inventory tracking, and analytics dashboards.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

