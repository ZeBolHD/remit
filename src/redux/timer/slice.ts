import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface timerState {
  time: number;
  timerId: number;
  remainingTime: number;
  isStarted: boolean;
  isPlaying: boolean;
}

const initialState: timerState = {
  time: 10,
  timerId: 0,
  remainingTime: 10,
  isPlaying: false,
  isStarted: false,
};

const timerSlice = createSlice({
  initialState,
  name: "timer",
  reducers: {
    startTimer: (state) => {
      state.isStarted = true;
      state.isPlaying = true;
    },

    tickTimer: (state) => {
      state.remainingTime -= 1;

      if (state.remainingTime < 1) {
        state.remainingTime = initialState.remainingTime;
        state.isPlaying = false;
        state.isStarted = false;

        clearInterval(state.timerId);
      }
    },

    toggleTimer: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setTimerId(state, action: PayloadAction<number>) {
      state.timerId = action.payload;
    },

    resetTimer(state) {
      state.remainingTime = state.time;
      state.isPlaying = false;
      state.isStarted = false;

      clearInterval(state.timerId);
    },

    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload;
      state.remainingTime = action.payload;
      state.isPlaying = false;
      state.isStarted = false;
    },
  },
});

export const {
  tickTimer,
  setTimerId,
  toggleTimer,
  resetTimer,
  startTimer,
  setTime,
} = timerSlice.actions;

export default timerSlice.reducer;
