import { Moment } from "moment";

import { Statistic } from "../../../types";

export const getWeekStats = (
	dateMonday: Moment,
	currentWeekStats: Statistic[]
) => {
	const weekStats = Array.from({ length: 7 }).map((_, i) => {
		const date = dateMonday.clone().add(i, "day");

		const stat = currentWeekStats.find(
			(stat) => stat.date === date.format("DD-MM-YYYY")
		);

		return stat ? stat.completedRounds : 0;
	});

	return weekStats;
};
