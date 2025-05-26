import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Page } from "@/shared/ui/Page";
import { Library } from "@/widgets/library-page/Library";

export default function LibraryPage() {
  return (
    <>
      <BreadcrumbHeader title="Библиотека" />
      <Page>
        <Library />
      </Page>
    </>
  );
}
