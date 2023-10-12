import { Tag } from "../../types";

interface TagStatisticsProps {
	tags: Tag[];
}

export const TagStatistics = ({ tags }: TagStatisticsProps) => {
	return (
		<div className="mt-[15px]">
			<div className="flex justify-between ">
				<h2 className="text-[25px]">Tags</h2>
				<h2 className="text-[25px]">Sessions</h2>
			</div>
			<div className="max-h-[125px] mt-[10px] overflow-y-auto overflow-hidden no-scrollbar">
				<ul className="text-[20px] h-full">
					{tags.map((tag) => (
						<li className="mt-[10px]" key={tag.name}>
							<div className="flex justify-between">
								<p>{tag.name}</p>
								<p>{tag.completedRounds}</p>
							</div>
							<div className="mt-[5px] w-full h-[1px] bg-primary-dark dark:bg-primary" />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
