import { motion } from "framer-motion";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { useSelector } from "react-redux";
import { selectTags } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import { Tag } from "../../types";
import { TagPortal } from "../TagPortal";
import { TagsListItem } from "./TagsListItem";

const testTags = [
  { name: "Sport", completedRounds: 0 },
  { name: "Work", completedRounds: 3 },
];

export const Tags = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const { tags } = useSelector(selectTags);

  const closeForm = () => {
    setIsPortalOpen(false);
  };

  return (
    <div
      className="w-full h-[350px] box-border relative  
      border-[2px] border-primary-dark dark:border-primary rounded-medium flex flex-col"
    >
      <button
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-dark"
        onClick={() => setIsPortalOpen(!isPortalOpen)}
      >
        <CiCirclePlus size={70} />
      </button>
      {isPortalOpen && (
        <TagPortal isOpen={isPortalOpen} closeForm={closeForm} />
      )}
      <div className="mt-[50px] py-[10px] max-h-full overflow-y-hidden">
        <motion.ul layoutScroll className="h-full overflow-y-auto no-scrollbar">
          {tags.map((tag) => (
            <TagsListItem tag={tag} key={tag.name} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};
