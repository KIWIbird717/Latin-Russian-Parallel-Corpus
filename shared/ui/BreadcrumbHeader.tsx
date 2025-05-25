"use client";

import { FC } from "react";
import { Layout } from "./Layout";
import { Typography } from "./Typography";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";

type BreadcrumbHeaderProps = {
  title: string;
};

export const BreadcrumbHeader: FC<BreadcrumbHeaderProps> = (props) => {
  const pathname = usePathname();
  const isFromHome = pathname === "/";

  return (
    <section
      className={cn("bg-primary-100 py-sm w-full pt-[64px]", isFromHome && "animate-fade-in")}
    >
      <Layout>
        <Typography.Heading2 className="animate-fade-in">{props.title}</Typography.Heading2>
      </Layout>
    </section>
  );
};
