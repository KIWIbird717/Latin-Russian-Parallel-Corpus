import { FC } from "react";
import { useRouter } from "@/shared/i18n/navigation";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";

export const NoSuchBook: FC = () => {
  const router = useRouter();

  return (
    <div className="gap-md animate-fade-in flex min-h-[600px] w-full flex-col items-center justify-center">
      <Typography.Heading3>Такой книги не найдено</Typography.Heading3>
      <Button variant="secondary" onClick={() => router.back()}>
        Вернуться назад
      </Button>
    </div>
  );
};
