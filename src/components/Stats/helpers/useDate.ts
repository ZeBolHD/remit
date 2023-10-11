import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectStats } from "../../../redux/selectors";

import { getCurrentWeekStats } from "./getCurrentWeekStats";
import { getSessionsForTheWeek } from "./getSessionsPerWeek";

export const useDate = () => {
	const [selectedWeek, setSelectedWeek] = useState(0);

	const { stats } = useSelector(selectStats);

	const dateToday = moment();

	const dateWithSelectedWeek = dateToday.add(selectedWeek, "week");

	const dateMonday = dateWithSelectedWeek.clone().startOf("week");
	const dateSunday = dateWithSelectedWeek.clone().endOf("week");

	const currentWeekStats = getCurrentWeekStats(stats, dateMonday, dateSunday);
	const sessionsForTheWeek = getSessionsForTheWeek(currentWeekStats);

	const setPreviousWeek = () => {
		setSelectedWeek((w) => w - 1);
	};

	const setNextWeek = () => {
		setSelectedWeek((w) => w + 1);
	};

	return {
		dateWithSelectedWeek,
		dateMonday,
		dateSunday,
		sessionsForTheWeek,
		currentWeekStats,
		selectedWeek,
		setPreviousWeek,
		setNextWeek,
	};
};
