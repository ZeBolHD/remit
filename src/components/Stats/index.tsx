import { useState } from "react";
import { useSelector } from "react-redux";

import { selectTags } from "../../redux/selectors";

import { Diagram } from "./Diagram";
import { WeekSelector } from "./WeekSelector";

export const Stats = () => {
	const [selectedWeek, setSelectedWeek] = useState(0);

	const { tags } = useSelector(selectTags);

	const setPreviousWeek = () => {
		setSelectedWeek((w) => w - 1);
	};

	const setNextWeek = () => {
		setSelectedWeek((w) => w + 1);
	};

	return (
		<div className="mt-[50px] max-h-full w-full text-center flex flex-col">
			<h2 className="text-[30px]">15 sessions</h2>
			<WeekSelector
				selectedWeek={selectedWeek}
				setNextWeek={setNextWeek}
				setPreviousWeek={setPreviousWeek}
			/>

			<Diagram />
			<div className="flex justify-between mt-[50px]">
				<h2 className="text-[30px]">Tags</h2>
				<h2 className="text-[30px]">Sessions</h2>
			</div>
			<div className="max-h-[200px] overflow-hidden">
				<ul className="text-[20px] mt-[10px] h-full overflow-y-auto no-scrollbar">
					{tags.map((tag) => (
						<li className="mt-[10px] first:mt-[10px]">
							<div className="flex justify-between">
								<p>{tag.name}</p>
								<p>{tag.completedRounds}</p>
							</div>
							<div className="mt-[10px] w-full h-[1px] bg-primary-dark dark:bg-primary" />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
