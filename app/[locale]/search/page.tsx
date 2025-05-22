import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Page } from "@/shared/ui/Page";
import { Tabs } from "@/shared/ui/Tabs";

export default function SearchPage() {
  return (
    <>
      <BreadcrumbHeader title="Поиск" />
      <Page>
        <Tabs
          className="w-[300px]"
          id="huh"
          tabs={[
            { id: 1, label: "Huh 1" },
            { id: 2, label: "Huh 2" },
          ]}
        />
      </Page>
    </>
  );
}
