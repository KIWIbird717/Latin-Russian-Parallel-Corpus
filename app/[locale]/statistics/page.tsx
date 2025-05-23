import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Page } from "@/shared/ui/Page";
import { Statistics } from "@/widgets/statistics-page/Statistics";

export default function StatisticsPage() {
  return (
    <>
      <BreadcrumbHeader title="Статистика" />
      <Page>
        <Statistics />
      </Page>
      ;
    </>
  );
}
