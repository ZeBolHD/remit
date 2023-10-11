import moment, { Moment } from "moment";

import { Statistic } from "../../../types";

export const getCurrentWeekStats = (
	stats: Statistic[],
	dateMonday: Moment,
	dateSunday: Moment
) => {
	return stats.filter((date) =>
		moment(date.date, "DD-MM-YYYY").isBetween(
			dateMonday,
			dateSunday,
			"day",
			"[]"
		)
	);
};
