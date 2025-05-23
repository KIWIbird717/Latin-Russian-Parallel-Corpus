import { Page } from "@/shared/ui/Page";
import { Hero } from "@/entities/common/Hero";
import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";

export default function AboutPage() {
  return (
    <>
      <BreadcrumbHeader title="О Нас" />
      <Page>
        <Hero
          title="О проекте “Latin-Russian Corpus”"
          description="Параллельный корпус латинско-русских текстов. Корпус основан на лучших и вошедших в отечественную культуру переводах, снабжён разметкой, позволяющей использовать гибкие алгоритмы поиска и анализа, открывая доступ к богатейшему лингвистическому материалу с перспективой исследования в области рецепции античной литературы и её влияния на отечественную культуру."
        />
      </Page>
    </>
  );
}
