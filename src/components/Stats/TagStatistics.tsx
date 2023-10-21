import { Tag } from "../../types";

import { TagStatisticsItem } from "./TagStatisticsItem";

interface TagStatisticsProps {
	tags: Tag[];
}

export const TagStatistics = ({ tags }: TagStatisticsProps) => {
	const tagsStatistics = tags.map((tag) => (
		<TagStatisticsItem tag={tag} key={tag.name} />
	));

	return (
		<div className="mt-[15px] laptop:mt-0 laptop:w-full  laptop:ml-[70px]">
			<div className="flex justify-between ">
				<h2 className="text-[25px] laptop:text-[35px]">Tags</h2>
				<h2 className="text-[25px] laptop:text-[35px]">Sessions</h2>
			</div>

			<ul className="text-[20px] h-[20vh] no-scrollbar overflow-y-scroll laptop:mt-[10px] laptop:h-[370px]">
				{tagsStatistics}
			</ul>
		</div>
	);
};
