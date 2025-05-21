import { ArrowLink } from "@/shared/ui/ArrowLink";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Page } from "@/shared/ui/Page";

export default function Home() {
  return (
    <Page>
      <Card>
        <Button>Some button</Button>
        <Button variant="secondary">Some button</Button>
        <ArrowLink href={"/"}>Начать поиск</ArrowLink>
      </Card>
    </Page>
  );
}
