import { motion } from "framer-motion";

interface HeaderItemProps {
  heading: string;
}

export const HeaderItem = ({ heading }: HeaderItemProps) => {
  return (
    <motion.h1
      initial={{ left: "-100%" }}
      animate={{ left: "50%" }}
      exit={{ left: "200%" }}
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 30,
        stiffness: 400,
      }}
      className="text-[40px] font-normal absolute translate-x-[-50%]"
    >
      {heading}
    </motion.h1>
  );
};
