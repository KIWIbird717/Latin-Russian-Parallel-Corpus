import { Layout } from "@/shared/ui/Layout";
import { cn } from "@/shared/utils/cn";
import { ComponentProps, FC } from "react";
import { Information } from "./components/Information";
import { Navigation } from "./components/Navigation";
import { Resources } from "./components/Resources";
import { Divider } from "@/shared/ui/Divider";
import { Copyright } from "./components/Copyright";

type FooterProps = ComponentProps<"footer">;
export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={cn("bg-background-200 py-lg", className)} {...props}>
      <Layout className="gap-xl flex w-full flex-col">
        <div className="gap-xl flex w-full justify-between">
          <Information />
          <Navigation />
          <Resources />
        </div>

        <Divider />

        <Copyright />
      </Layout>
    </footer>
  );
};
