import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Tag } from "../../types";
import { TagPortal } from "../TagPortal";
import { TagsListItem } from "./TagsListItem";

const testTags = [
  { name: "Sport", completedRounds: 0 },
  { name: "Work", completedRounds: 3 },
];

export const Tags = () => {
  const [tags, setTags] = useState<Tag[]>(testTags);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const onClickAdd = (tag: Tag) => {
    setIsPortalOpen(false);
    setTags([tag, ...tags]);
  };

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
        <TagPortal
          isOpen={isPortalOpen}
          onClickAdd={onClickAdd}
          closeForm={closeForm}
        />
      )}
      <div className="mt-[60px] max-h-full overflow-y-hidden overflow-x-visible">
        <ul className="h-full overflow-y-scroll">
          {tags.map((tag) => (
            <TagsListItem tag={tag} key={tag.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};
