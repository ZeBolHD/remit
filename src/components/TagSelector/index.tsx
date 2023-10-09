import { motion, Variant } from "framer-motion";
import { useSelector } from "react-redux";

import { useState } from "react";

import { selectTags } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import { setCurrentTag } from "../../redux/tags/slice";
import { Tag } from "../../types";

import { TagSelectorItem } from "./TagSelectorItem";
import { CurrentTag } from "./CurrentTag";

const variants: Record<string, Variant> = {
	open: {
		width: "100%",
		height: "100%",
	},
	closed: {
		// width: "auto",
		height: "60px",
	},
};

export const TagSelector = () => {
	const { currentTag, tags } = useSelector(selectTags);
	const dispatch = useAppDispatch();

	const [isListOpen, setIsListOpen] = useState(false);

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
			className={`${isListOpen ? "w-full h-full py-[15px]" : "w-auto"}
      absolute flex flex-col border-[2px] px-[20px] py-[10px]
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
