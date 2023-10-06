import { Tag } from "../../types";

import { RxCross2 } from "react-icons/rx";
import { useAppDispatch } from "../../redux/store";
import { removeTag } from "../../redux/tags/slice";

interface TagsListItem {
  tag: Tag;
}

export const TagsListItem = ({ tag }: TagsListItem) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    dispatch(removeTag(tag));
  };

  return (
    <li className="mt-[30px] first-[mt-0] text-center px-[50px] relative">
      <h5 className="text-[20px] text-primary-dark dark:text-primary">
        {tag.name}
      </h5>
      <RxCross2
        className="absolute right-[17%] top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={onClickRemove}
        size={20}
      />
      <div className="w-full h-[2px] bg-primary-dark dark:bg-primary" />
    </li>
  );
};
