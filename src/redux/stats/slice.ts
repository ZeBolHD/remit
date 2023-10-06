import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addStatistic(state, action: PayloadAction<string>) {
      state.stats.map((item, index) => {
        if (item.date === action.payload) {
          return {
            date: action.payload,
            completedRounds: state.stats[index].completedRounds,
          };
        }

        return item;
      });
    },
  },
});

export const { addStatistic } = statsSlice.actions;

export default statsSlice.reducer;
