"use client";

import { motion } from "motion/react";
import { Loader } from "@/shared/ui/Loader";
import { FC } from "react";

export const Loading: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute flex min-h-[500px] w-full items-center justify-center"
    >
      <Loader size="large" />
    </motion.div>
  );
};
