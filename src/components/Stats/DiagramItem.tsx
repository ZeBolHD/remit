import { motion } from "framer-motion";

interface DiagramItemProps {
  dayOfWeek: string;
  completedRounds: number;
  max: number;
}

export const DiagramItem = ({
  completedRounds,
  max,
  dayOfWeek,
}: DiagramItemProps) => {
  const height = (100 / max) * completedRounds;

  return (
    <li className="w-[30px] text-center">
      <div
        className="h-[150px] w-full dark:bg-primary bg-primary-dark rounded-large 
        overflow-hidden flex flex-col"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: height + "%" }}
          className={`mt-auto mb-0 bg-active `}
        />
      </div>
      <p className="mt-[5px] text-[20px] font-normal">{dayOfWeek}</p>
    </li>
  );
};
