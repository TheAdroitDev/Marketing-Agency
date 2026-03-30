import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
    {
      title: "Full-Stack Architecture",
      description:
        "Include both frontend and backend components to create a complete, functional web application.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Payments",
      description:
        "Secure Razorpay integration for effortless transactions, subscriptions, and global payments",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Order Tracking & Delivery",
      description:
        "Automated shipping and real-time tracking through emails so your customers always know where their order is.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Fast & Always Available",
      description: "Your website loads instantly and stays online 24/7, no matter how many visitors you have.",
      icon: <IconCloud />,
    },
    {
      title: "Business Management Tools",
      description: "Control your inventory, track orders, and manage customers—all from one simple dashboard built just for you.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Beautiful & Easy to Use",
      description:
        "Stunning designs that look great on phones, tablets, and computers. Your customers will love using your site.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Built for Speed",
      description:
        "Lightning-fast loading times that keep customers engaged and help you rank higher on Google.",
      icon: <IconHeart />,
    },
    {
      title: "Ongoing Support",
      description: "Direct help whenever you need it. Updates, fixes, and guidance as your business grows.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
