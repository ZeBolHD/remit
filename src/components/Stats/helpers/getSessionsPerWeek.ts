import { Statistic } from "../../../types";

export const getSessionsForTheWeek = (currentWeekStats: Statistic[]) => {
	const sessionsPerWeek = currentWeekStats.reduce(
		(acc, item) => acc + item.completedRounds,
		0
	);

	return sessionsPerWeek;
};
