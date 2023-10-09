import { Tag } from "../../types";

interface TagSelectorItemProps {
	tag: Tag;
	onSelectTag: (tag: Tag) => void;
}

export const TagSelectorItem = ({ tag, onSelectTag }: TagSelectorItemProps) => {
	return (
		<li className="first:mt-0 mt-[15px] ml-[15px]">
			<p className="w-full text-left" onClick={() => onSelectTag(tag)}>
				{tag.name}
			</p>
		</li>
	);
};
