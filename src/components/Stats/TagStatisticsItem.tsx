import { Tag } from "../../types";

interface TagStatisticsItemProps {
	tag: Tag;
}

export const TagStatisticsItem = ({ tag }: TagStatisticsItemProps) => {
	return (
		<li className="mt-[10px] laptop:text-[25px]" key={tag.name}>
			<div className="flex justify-between">
				<p>{tag.name}</p>
				<p>{tag.completedRounds}</p>
			</div>
			<div className="mt-[5px] w-full h-[1px] bg-primary-dark dark:bg-primary" />
		</li>
	);
};
