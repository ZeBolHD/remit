import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { formatTime } from "../../helpers/formatTimer";
import { useAppDispatch } from "../store";

interface timerState {
  time: number;
  timerId: number;
  remainingTime: string;
  isPlaying: boolean;
}

const initialState: timerState = {
  time: 3000,
  timerId: 0,
  remainingTime: formatTime(3000),
  isPlaying: false,
};

const timerSlice = createSlice({
  initialState,
  name: "timer",
  reducers: {
    handleTimer: (state) => {
      state.time -= 1;
      state.remainingTime = formatTime(state.time);
    },

    toggleTimer: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setTimerId(state, action: PayloadAction<number>) {
      state.timerId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("startTimer", () => {});
  },
});

export const { handleTimer, setTimerId, toggleTimer } = timerSlice.actions;

export default timerSlice.reducer;
