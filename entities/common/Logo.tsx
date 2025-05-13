import { Link } from "@/shared/i18n/navigation";
import { FC } from "react";
import LogoSvg from "@/public/svg/logo.svg";
import { Typography } from "@/shared/ui/Typography/index";

type LogoProps = {};
export const Logo: FC<LogoProps> = (props) => {
  return (
    <Link href={"/"} className="group flex items-center gap-[6px]">
      <LogoSvg className="transition-all duration-100 group-hover:opacity-90" />
      <Typography className="font-charis-sil group-hover:text-primary-300 max-w-[50px] text-[13px] transition-colors duration-100">
        Latin Russian Corpus
      </Typography>
    </Link>
  );
};
