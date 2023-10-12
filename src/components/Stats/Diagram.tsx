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
		<div className="w-full mt-[15px]">
			<ul className="flex w-full justify-between ">
				{weekStats.map((completedRounds, i) => (
					<DiagramItem
						key={i}
						dayOfWeek={daysOfWeek[i]}
						completedRounds={completedRounds}
						max={sessionsForTheWeek}
					/>
				))}
			</ul>
		</div>
	);
};
