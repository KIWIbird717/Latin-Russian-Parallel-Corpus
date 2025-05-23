"use client";

import { cn } from "@/shared/utils/cn";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { AnimatePresence, motion } from "motion/react";
import { FC, ReactNode } from "react";

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  className?: string;
};
export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalBody onClose={onClose} className={className}>
          {children}
        </ModalBody>
      )}
    </AnimatePresence>
  );
};

type ModalBodyProps = Pick<ModalProps, "onClose" | "children" | "className">;
const ModalBody: FC<ModalBodyProps> = (props) => {
  useLockBodyScroll();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] h-screen w-screen bg-black/30 backdrop-blur-sm"
        onClick={props.onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
        transition={{ duration: 0.2 }}
        className={cn("fixed left-1/2 top-1/2 z-[110]", props.className)}
      >
        {props.children}
      </motion.div>
    </>
  );
};
