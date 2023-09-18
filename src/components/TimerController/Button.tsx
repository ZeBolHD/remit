import { ReactNode } from "react";

import { AnimationProps, motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  initial?: AnimationProps["initial"];
  animate?: AnimationProps["animate"];
  exit?: AnimationProps["exit"];
}

export const Button = ({
  children,
  initial,
  animate,
  exit,
  onClick,
}: ButtonProps) => {
  return (
    <motion.button
      className="absolute"
      onClick={onClick}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 30,
        stiffness: 450,
      }}
    >
      {children}
    </motion.button>
  );
};
