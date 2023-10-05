import { Tag } from "../../types";

interface TagsListItem {
  tag: Tag;
}

export const TagsListItem = ({ tag }: TagsListItem) => {
  return (
    <li className="mt-[30px] first-[mt-0] text-center px-[50px]">
      <h5 className="text-[20px] text-primary-dark dark:text-primary">
        {tag.name}
      </h5>

      <div className="w-full h-[2px] bg-primary-dark dark:bg-primary" />
    </li>
  );
};
