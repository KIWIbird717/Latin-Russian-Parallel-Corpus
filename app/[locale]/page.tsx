import { Page } from "@/shared/ui/Page";
import { MainPageHero } from "@/widgets/main-page/MainPageHero";
import { Suggestions } from "@/widgets/main-page/Suggestions";

export default function Home() {
  return (
    <Page>
      <MainPageHero />
      <Suggestions className="mb-[170px]" />
    </Page>
  );
}
