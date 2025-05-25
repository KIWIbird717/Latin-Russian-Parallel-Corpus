import { Layout } from "@/shared/ui/Layout";
import { Typography } from "@/shared/ui/Typography/index";
import "@/public/styles/globals.css";
import { cn } from "@/shared/utils/cn";
import { charisSIL, inter } from "@/shared/fonts";
import XSquareSvg from "@/public/svg/x-square.svg";

export default function NotFound() {
  return (
    <main
      className={cn(
        "flex h-screen w-full items-center justify-center",
        charisSIL.variable,
        inter.variable,
      )}
    >
      <Layout className="flex flex-col items-center justify-center">
        <XSquareSvg />
        <Typography.Heading2>Страница не найдена</Typography.Heading2>
      </Layout>
    </main>
  );
}
