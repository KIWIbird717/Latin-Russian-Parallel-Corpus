"use client";

import { Typography } from "@/shared/ui/Typography";
import { AnimatePresence, motion } from "motion/react";
import { ComponentProps, FC, ReactNode, useState } from "react";
import ChevronSvg from "@/public/svg/chevron.svg";
import { cn } from "@/shared/lib/utils";

type DisclosureProps = ComponentProps<"div"> & { label: ReactNode; disabled?: boolean };
export const Disclosure: FC<DisclosureProps> = ({
  children,
  label,
  className,
  disabled,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      {...props}
      className={cn(
        "gap-md border-border-stroke flex flex-col border-b",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen((state) => !state)}
        className="gap-lg flex cursor-pointer items-center justify-between"
      >
        <Typography.Heading4>{label}</Typography.Heading4>
        <ChevronSvg className={cn("transition duration-100", isOpen && "-rotate-180")} />
      </button>

      <AnimatePresence initial={false}>
        <motion.div
          className="gap-md flex flex-col overflow-hidden px-[2px]"
          animate={{ height: isOpen ? "inherit" : 0 }}
        >
          {children}
          <div className="h-[8px] w-full" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
