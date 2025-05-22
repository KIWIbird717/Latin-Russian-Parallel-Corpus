import { MorphSearchingFilters } from "@/features/search-page/MorphSearchingFilters";
import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/Card";
import { FC } from "react";

export const MorphSearchWidget: FC = () => {
  return (
    <section className="gap-md grid grid-cols-3">
      <MorphSearchingFilters className="col-span-1" />
      <MorphViewer className="col-span-2" />
    </section>
  );
};
type MorphViewerProps = { className?: string };
const MorphViewer: FC<MorphViewerProps> = ({ className }) => {
  return <Card className={cn("", className)}></Card>;
};
