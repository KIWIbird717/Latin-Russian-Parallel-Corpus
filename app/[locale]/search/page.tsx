import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Disclosure } from "@/shared/ui/Disclosure";
import { Page } from "@/shared/ui/Page";

export default function SearchPage() {
  return (
    <>
      <BreadcrumbHeader title="Поиск" />
      <Page>
        <Disclosure label="Авторы и Оперы" className="max-w-[500px]">
          <div className="h-[100px] w-[100px] bg-red-100" />
        </Disclosure>
      </Page>
    </>
  );
}
