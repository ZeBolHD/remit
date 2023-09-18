import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeaderItemProps {
  heading?: string;
  children?: ReactNode;
}

export const HeaderItem = ({ heading, children }: HeaderItemProps) => {
  return (
    <motion.h1
      initial={{ left: "-100%", opacity: 0 }}
      animate={{ left: "50%", opacity: 1 }}
      exit={{ left: "200%", opacity: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 30,
        stiffness: 400,
      }}
      className="text-[40px] font-normal absolute translate-x-[-50%] break-keep w-full"
    >
      {heading || children}
    </motion.h1>
  );
};
