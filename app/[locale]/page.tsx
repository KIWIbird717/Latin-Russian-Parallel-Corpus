import { Page } from "@/shared/ui/Page";
import { Hero } from "@/widgets/main-page/Hero";
import { Suggestions } from "@/widgets/main-page/Suggestions";

export default function Home() {
  return (
    <Page>
      <Hero />
      <Suggestions className="mb-[170px]" />
    </Page>
  );
}
