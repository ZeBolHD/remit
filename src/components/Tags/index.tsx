import { CiCirclePlus } from "react-icons/ci";
import { TagsListItem } from "./TagsListItem";

export const Tags = () => {
  return (
    <div
      className="w-full h-[500px] box-border relative px-[50px] padding:inherit 
      border-[2px] border-primary-dark dark:border-primary rounded-medium"
    >
      <button className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary dark:bg-primary-dark">
        <CiCirclePlus size={70} />
      </button>
      <ul className="mt-[60px]">
        <TagsListItem tag={{ name: "Sport", completedRounds: 0 }} />
        <TagsListItem tag={{ name: "Work", completedRounds: 0 }} />
      </ul>
    </div>
  );
};
