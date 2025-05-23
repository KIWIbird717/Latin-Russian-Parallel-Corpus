"use client";

import { FC } from "react";
import { Toaster } from "react-hot-toast";

export const ToasterProvider: FC = () => {
  return (
    <Toaster
      toastOptions={{
        className: "!bg-background-100 !text-text-500 !shadow-lg",
      }}
      containerClassName="toaster"
    />
  );
};
