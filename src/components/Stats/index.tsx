import { useSelector } from "react-redux";

import { selectTags } from "../../redux/selectors";

import { Diagram } from "./Diagram";
import { useDate } from "./helpers/useDate";
import { WeekSelector } from "./WeekSelector";

export const Stats = () => {
	const { tags } = useSelector(selectTags);

	const {
		selectedWeek,
		setNextWeek,
		setPreviousWeek,
		sessionsForTheWeek,
		currentWeekStats,
	} = useDate();

	return (
		<div className="mt-0 max-h-full w-full text-center flex flex-col">
			<h2 className="text-[30px]">{sessionsForTheWeek} sessions</h2>
			<WeekSelector
				selectedWeek={selectedWeek}
				setNextWeek={setNextWeek}
				setPreviousWeek={setPreviousWeek}
			/>

			<Diagram
				sessionsForTheWeek={sessionsForTheWeek}
				dateMonday={useDate().dateMonday}
				currentWeekStats={currentWeekStats}
			/>
			<div className="flex justify-between mt-[50px]">
				<h2 className="text-[30px]">Tags</h2>
				<h2 className="text-[30px]">Sessions</h2>
			</div>
			<div className="max-h-[200px] overflow-hidden">
				<ul className="text-[20px] mt-[10px] h-full overflow-y-auto no-scrollbar">
					{tags.map((tag) => (
						<li className="mt-[10px] first:mt-[10px]" key={tag.name}>
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
