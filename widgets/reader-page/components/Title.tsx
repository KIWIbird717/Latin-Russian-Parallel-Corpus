import { FC, ReactNode, useState } from "react";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { AnimatePresence, motion } from "motion/react";
import BookOpenSvg from "@/public/svg/book-open.svg";
import BookOpenSolidSvg from "@/public/svg/book-open-solid.svg";

type ToggleProps = {
  toggledState: ReactNode;
  untoggledState: ReactNode;
  onChange?: (isToggled: boolean) => void;
};

const Toggle: FC<ToggleProps> = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleCLick = () => {
    setIsToggled((state) => {
      props.onChange?.(!state);
      return !state;
    });
  };

  return (
    <Button variant="secondary" className="relative aspect-square" onClick={handleCLick}>
      <AnimatePresence>
        {isToggled ? (
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {props.toggledState}
          </motion.div>
        ) : (
          <motion.div
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {props.untoggledState}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

type TitleProps = {
  title: string;
  description: string;
  onToggle: ToggleProps["onChange"];
};

export const Title: FC<TitleProps> = (props) => {
  return (
    <div className="flex w-full justify-between">
      <div className="gap-sm flex flex-col">
        <Typography.Heading3>{props.title}</Typography.Heading3>
        <Typography.Small className="text-text-200">{props.description}</Typography.Small>
      </div>

      <div className="gap-sm flex items-center">
        <Toggle
          onChange={props.onToggle}
          toggledState={<BookOpenSolidSvg className="scale-120" />}
          untoggledState={<BookOpenSvg className="scale-110" />}
        />
      </div>
    </div>
  );
};
