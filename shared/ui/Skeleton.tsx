import type React from "react";
import { twMerge } from "tailwind-merge";

type SkeletonProps = React.ComponentProps<"div">;

const Skeleton = ({ ref, className, ...props }: SkeletonProps) => {
  return (
    <div
      data-slot="skeleton"
      ref={ref}
      className={twMerge("shrink-0 animate-pulse rounded-[10px] bg-black/10", className)}
      {...props}
    />
  );
};

export type { SkeletonProps };
export { Skeleton };
