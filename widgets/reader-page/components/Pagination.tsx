import { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import ChevronSvg from "@/public/svg/chevron.svg";

type PaginationProps = {
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const hasPrevPage = props.page > 0;
  const hasNextPage = props.page < props.totalPages - 1;

  const prevPage = () => {
    props.setPage((state) => (hasPrevPage ? state - 1 : 0));
  };

  const nextPage = () => {
    props.setPage((state) => (hasNextPage ? state + 1 : props.totalPages - 1));
  };

  return (
    <div className="gap-md flex w-full items-center justify-center">
      <Button variant="secondary" onClick={prevPage} disabled={!hasPrevPage}>
        <ChevronSvg className="-rotate-90" /> Предыдущий
      </Button>
      <Typography.Small className="text-text-200">
        {props.page + 1} из {props.totalPages} фрагментов
      </Typography.Small>
      <Button variant="secondary" onClick={nextPage} disabled={!hasNextPage}>
        Следующий <ChevronSvg className="rotate-90" />
      </Button>
    </div>
  );
};
