import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { useState } from "react";

import { selectTags } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import { setCurrentTag } from "../../redux/tags/slice";
import { Tag } from "../../types";

import { TagSelectorItem } from "./TagSelectorItem";
import { CurrentTag } from "./CurrentTag";

export const TagSelector = () => {
	const [isListOpen, setIsListOpen] = useState(false);

	const { currentTag, tags } = useSelector(selectTags);
	const dispatch = useAppDispatch();

	if (!currentTag) {
		return null;
	}

	const toggleList = () => {
		setIsListOpen(!isListOpen);
	};

	const onSelectTag = (tag: Tag) => {
		setIsListOpen(false);
		dispatch(setCurrentTag(tag));
	};

	const tagsWithoutCurrentTag = tags.filter(
		(tag) => tag.name !== currentTag.name
	);

	const tagList = tagsWithoutCurrentTag.map((tag) => (
		<TagSelectorItem key={tag.name} tag={tag} onSelectTag={onSelectTag} />
	));

	return (
		<motion.div
			layout
			transition={{
				duration: 0.3,
				type: "spring",
				damping: 30,
				stiffness: 200,
			}}
			className={`${isListOpen ? "w-full h-full py-[10px]" : "w-auto"}
      absolute flex flex-col border-[2px] px-[15px] py-[5px] 
      border-primary-dark dark:border-primary text-[20px] bg-primary dark:bg-primary-dark 
      rounded-medium z-10 overflow-hidden
       `}
		>
			<CurrentTag
				tag={currentTag}
				toggleList={toggleList}
				isListOpen={isListOpen}
				onSelectTag={onSelectTag}
			/>
			{isListOpen && <ul className="mt-[15px]">{tagList}</ul>}
		</motion.div>
	);
};
