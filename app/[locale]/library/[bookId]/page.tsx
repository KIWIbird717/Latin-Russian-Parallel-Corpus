import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Page } from "@/shared/ui/Page";
import { BookReader } from "@/widgets/reader-page/BookReader";

export default async function BookReaderPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params;

  return (
    <>
      <BreadcrumbHeader title="Чтение" />
      <Page>
        <BookReader bookId={bookId} />
      </Page>
    </>
  );
}
