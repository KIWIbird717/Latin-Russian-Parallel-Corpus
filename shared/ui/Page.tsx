import { ComponentProps, FC } from "react";
import { Layout } from "./Layout";
import { cn } from "../utils/cn";

type PageProps = ComponentProps<typeof Layout>;
export const Page: FC<PageProps> = ({ children, className, ...props }) => {
  return (
    <Layout
      {...props}
      className={cn("pb-lg gap-lg mt-[64px] flex min-h-screen flex-col", className)}
    >
      {children}
    </Layout>
  );
};
