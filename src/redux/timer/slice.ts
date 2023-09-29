import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertMinutesToSeconds } from "./helpers/convertMinutesToSeconds";
import { getCurrentRoundType } from "./helpers/getCurrentRoundType";
import { resetTimer } from "./helpers/resetTimer";
import { setNextRound } from "./helpers/setNextRound";
import { TimerSettings, TimerState } from "./types";

const initialState: TimerState = {
  time: convertMinutesToSeconds(45),
  timerId: 0,
  isPlaying: false,
  focusDuration: 45,
  breakDuration: 5,
  rounds: 3,
  currentRound: 0,
  currentRoundType: "initial",
};

const timerSlice = createSlice({
  initialState,
  name: "timer",
  reducers: {
    startTimer: (state) => {
      state.isPlaying = true;
      state.currentRound = 0.5;
      state.currentRoundType = "focus";
      state.time = convertMinutesToSeconds(state.focusDuration);
    },

    tickTimer: (state) => {
      state.time -= 1;

      if (state.time < 1) {
        state.isPlaying = false;
        setNextRound(state);
      }
    },

    toggleTimer: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setTimerId(state, action: PayloadAction<number>) {
      state.timerId = action.payload;
    },

    setComplete(state) {
      setNextRound(state);
    },

    setTimerSettings(state, action: PayloadAction<TimerSettings>) {
      state.focusDuration = action.payload.focusDuration;
      state.breakDuration = action.payload.breakDuration;
      state.rounds = action.payload.rounds;

      resetTimer(state);
    },
  },
});

export const {
  tickTimer,
  setTimerId,
  toggleTimer,
  setComplete,
  startTimer,
  setTimerSettings,
} = timerSlice.actions;

export default timerSlice.reducer;
