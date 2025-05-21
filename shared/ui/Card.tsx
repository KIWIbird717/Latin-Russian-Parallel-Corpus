import { ComponentProps, FC } from "react";
import { tv } from "tailwind-variants";

const variants = tv({
  base: "flex flex-col gap-lg rounded-md border border-border-stroke p-md",
});

type CardProps = ComponentProps<"div">;
export const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={variants({ className })}>
      {children}
    </div>
  );
};
