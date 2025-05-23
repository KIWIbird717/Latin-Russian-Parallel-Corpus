"use client";

import { initMocks } from "../lib/msw/setup";

import { FC, ReactNode } from "react";

if (
  // process.env.NODE_ENV === "development" &&
  Boolean(parseInt(process.env.NEXT_PUBLIC_USE_MSW_MOCKS || "0"))
) {
  initMocks();
}

type MSWMocksProviderProps = { children: ReactNode };
export const MSWMocksProvider: FC<MSWMocksProviderProps> = (props) => {
  return <>{props.children}</>;
};
