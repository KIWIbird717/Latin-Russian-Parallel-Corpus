import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Page } from "@/shared/ui/Page";
import { MorphSearchWidget } from "@/widgets/search-page/MorphSearchWidget";

export default function SearchPage() {
  return (
    <>
      <BreadcrumbHeader title="Поиск" />
      <Page>
        <MorphSearchWidget />
      </Page>
    </>
  );
}
