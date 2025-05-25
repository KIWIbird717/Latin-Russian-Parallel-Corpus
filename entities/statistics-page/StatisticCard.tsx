import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/Card";
import { Typography } from "@/shared/ui/Typography";
import { ComponentProps, FC, ReactNode } from "react";

type StatisticCardProps = ComponentProps<typeof Card> & { title: string; icon: ReactNode };
export const StatisticCard: FC<StatisticCardProps> = ({
  title,
  className,
  children,
  icon,
  ...props
}) => {
  return (
    <Card className={cn("bg-accent-100 p-xl w-full", className)} {...props}>
      <div className="flex w-full items-center justify-between">
        <Typography.Body weight="bold">{title}</Typography.Body>
        {icon}
      </div>
      {children}
    </Card>
  );
};
