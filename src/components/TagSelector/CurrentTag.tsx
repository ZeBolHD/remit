import { motion } from "framer-motion";

import { RiArrowDropDownLine } from "react-icons/ri";

import { Tag } from "../../types";

interface CurrentTagProps {
	tag: Tag;
	toggleList: () => void;
	isListOpen: boolean;
	onSelectTag: (tag: Tag) => void;
}

export const CurrentTag = ({
	tag,
	onSelectTag,
	isListOpen,
	toggleList,
}: CurrentTagProps) => {
	return (
		<motion.div
			layout="position"
			className="flex justify-between w-full h-fit items-center cursor-pointer"
			onClick={toggleList}
		>
			<h5
				onClick={() => onSelectTag(tag)}
				className={`${
					isListOpen
						? `py-[5px] px-[15px] border-[2px] border-primary-dark dark:border-primary rounded-medium 
						laptop:py-[10px] laptop:px-[20px]`
						: ""
				} w-fit line-clamp-1`}
			>
				{tag.name}
			</h5>
			{!isListOpen ? (
				<button className="w-[35px] h-[35px]">
					<RiArrowDropDownLine />
				</button>
			) : null}
		</motion.div>
	);
};
