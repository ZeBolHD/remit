import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

import { Statistic } from "../../types";

interface StatsState {
	stats: Statistic[];
}

const initialState: StatsState = {
	stats: [],
};

const statsSlice = createSlice({
	name: "stats",
	initialState,
	reducers: {
		addStatistic(state) {
			const currentDate = moment().format("DD-MM-YYYY");

			const currentDateStats = state.stats.find(
				(item) => item.date === currentDate
			);

			if (currentDateStats) {
				const index = state.stats.indexOf(currentDateStats);
				state.stats[index] = {
					...currentDateStats,
					completedRounds: currentDateStats.completedRounds + 1,
				};

				return;
			}

			state.stats = [{ date: currentDate, completedRounds: 1 }, ...state.stats];
		},
	},
});

export const { addStatistic } = statsSlice.actions;

export default statsSlice.reducer;
