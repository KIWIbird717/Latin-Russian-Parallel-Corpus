import { ComponentProps, FC } from "react";
import { cn } from "../utils/cn";

type LayoutProps = ComponentProps<"section">;
export const Layout: FC<LayoutProps> = ({ className, children, ...props }) => {
  return (
    <section {...props} className={cn("mx-auto w-full max-w-[1032px]", className)}>
      {children}
    </section>
  );
};
