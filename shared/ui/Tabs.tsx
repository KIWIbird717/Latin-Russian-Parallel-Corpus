"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/utils/cn";
import { Typography } from "./Typography";

export type TabType<T> = {
  id: number | string;
  label: string | ReactNode;
  data?: T;
};

export type TabsProps<T> = {
  id: string | number;
  tabs: TabType<T>[];
  onChange?: (tab: TabType<T>) => void;
  className?: string;
  label?: ReactNode;
};

export const Tabs = <T,>({ tabs, className, label, ...props }: TabsProps<T>) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleActiveTab = (tab: TabType<T>) => {
    setActiveTab(tab.id);
    props.onChange?.(tab);
  };

  return (
    <div className={cn("gap-micro flex w-full flex-col", className)}>
      {label && <Typography.Small className="pl-[3px]">{label}</Typography.Small>}
      <div className="bg-background-200 flex w-full rounded-lg p-1">
        {tabs.map((tab) => (
          <button
            key={`${props.id}-${tab.id}`}
            onClick={() => handleActiveTab(tab)}
            className={cn(
              "text-text-500 py-sm relative h-[36px] w-full cursor-pointer px-3 text-sm font-medium transition focus-visible:outline-2",
              activeTab === tab.id ? "" : "hover:text-text-300",
            )}
            type="button"
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId={`${props.id}-bubble`}
                className="bg-background-100 absolute inset-0 z-10 rounded-sm shadow"
                transition={{ type: "spring", stiffness: 500, damping: 50, mass: 1 }}
              />
            )}
            <Typography.Body className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              {tab.label}
            </Typography.Body>
          </button>
        ))}
      </div>
    </div>
  );
};
