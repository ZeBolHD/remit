import { useSelector } from "react-redux";

import { selectTags } from "../../redux/selectors";

import { Diagram } from "./Diagram";
import { useDate } from "./helpers/useDate";
import { TagStatistics } from "./TagStatistics";
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
		<div className="max-h-full w-full text-center flex flex-col">
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

			<TagStatistics tags={tags} />
		</div>
	);
};
