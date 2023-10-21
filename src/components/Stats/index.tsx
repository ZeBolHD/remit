import { useSelector } from "react-redux";

import { selectTags } from "../../redux/selectors";

import { Diagram } from "./Diagram";
import { useDate } from "./helpers/useDate";
import { TagStatistics } from "./TagStatistics";
import { WeekSelector } from "./WeekSelector";

export const Stats = () => {
	const { tags } = useSelector(selectTags);

	const {
		dateMonday,
		selectedWeek,
		setNextWeek,
		setPreviousWeek,
		sessionsForTheWeek,
		currentWeekStats,
	} = useDate();

	return (
		<div className="max-h-full w-full text-center flex flex-col laptop:h-full">
			<h2 className="text-[30px] laptop:mt-[15px] laptop:text-[40px]">
				{sessionsForTheWeek} sessions
			</h2>
			<WeekSelector
				selectedWeek={selectedWeek}
				setNextWeek={setNextWeek}
				setPreviousWeek={setPreviousWeek}
			/>

			<div className="laptop:flex laptop:h-full laptop:mt-[80px] laptop:overflow-hidden">
				<Diagram
					sessionsForTheWeek={sessionsForTheWeek}
					dateMonday={dateMonday}
					currentWeekStats={currentWeekStats}
				/>

				<TagStatistics tags={tags} />
			</div>
		</div>
	);
};
