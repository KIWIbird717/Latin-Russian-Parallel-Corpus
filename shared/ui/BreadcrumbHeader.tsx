import { FC } from "react";
import { Layout } from "./Layout";
import { Typography } from "./Typography";

type BreadcrumbHeaderProps = {
  title: string;
};
export const BreadcrumbHeader: FC<BreadcrumbHeaderProps> = (props) => {
  return (
    <section className="bg-primary-100 py-sm w-full pt-[64px]">
      <Layout>
        <Typography.Heading2>{props.title}</Typography.Heading2>
      </Layout>
    </section>
  );
};
