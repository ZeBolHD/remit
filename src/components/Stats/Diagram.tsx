import { Moment } from "moment";

import { Statistic } from "../../types";

import { DiagramItem } from "./DiagramItem";

import { daysOfWeek } from "./helpers/consts";

import { getWeekStats } from "./helpers/getWeekStats";

interface DiagramProps {
	currentWeekStats: Statistic[];
	sessionsForTheWeek: number;
	dateMonday: Moment;
}

export const Diagram = ({
	currentWeekStats,
	dateMonday,
	sessionsForTheWeek,
}: DiagramProps) => {
	const weekStats = getWeekStats(dateMonday, currentWeekStats);

	return (
		<ul
			className="mt-[15px] flex w-full justify-between 
		laptop:justify-normal laptop:h-[90%] laptop:mt-0 laptop:w-fit"
		>
			{weekStats.map((completedRounds, i) => (
				<DiagramItem
					key={i}
					dayOfWeek={daysOfWeek[i]}
					completedRounds={completedRounds}
					max={sessionsForTheWeek}
				/>
			))}
		</ul>
	);
};
