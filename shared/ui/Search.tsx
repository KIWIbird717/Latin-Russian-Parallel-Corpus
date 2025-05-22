import { ComponentProps, FC } from "react";
import { Input } from "./Input";
import SearchSvg from "@/public/svg/search.svg";

type SearchProps = ComponentProps<typeof Input>;
export const Search: FC<SearchProps> = (props) => {
  return <Input {...props} icon={<SearchSvg className="[&_path]:stroke-text-200" />} />;
};
