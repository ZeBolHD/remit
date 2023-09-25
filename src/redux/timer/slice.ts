import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertMinutesToSeconds } from "../../helpers/convertMinutesToSeconds";
import { getCurrentRoundType } from "../../helpers/getCurrentRoundType";
import { CurrentRoundType } from "../../types";

interface TimerState {
  time: number;
  timerId: number;
  remainingTime: number;
  isPlaying: boolean;
  focusDuration: number;
  breakDuration: number;
  rounds: number;
  currentRound: number;
  currentRoundType: CurrentRoundType;
}

const initialState: TimerState = {
  time: 45,
  timerId: 0,
  remainingTime: convertMinutesToSeconds(45),
  isPlaying: false,
  focusDuration: 45,
  breakDuration: 10,
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
      state.currentRound = 1;
      state.currentRoundType = "focus";
      state.time = state.focusDuration;
    },

    tickTimer: (state) => {
      state.remainingTime -= 1;

      if (state.remainingTime < 1) {
        state.isPlaying = false;
        clearInterval(state.timerId);

        state.currentRound += 1;

        const currentRoundType = getCurrentRoundType(
          state.currentRound,
          state.rounds
        );

        switch (currentRoundType) {
          case "focus":
            state.currentRound += 1;
            state.currentRoundType = "focus";
            state.time = convertMinutesToSeconds(state.focusDuration);
            state.remainingTime = convertMinutesToSeconds(state.focusDuration);
            break;

          case "break":
            state.currentRound += 1;
            state.currentRoundType = "break";
            state.time = convertMinutesToSeconds(state.breakDuration);
            state.remainingTime = convertMinutesToSeconds(state.breakDuration);
            break;

          default:
            state.currentRound = state.rounds;
            state.currentRoundType = "initial";
            state.time = convertMinutesToSeconds(state.focusDuration);
            state.remainingTime = convertMinutesToSeconds(state.focusDuration);
            break;
        }
      }
    },

    toggleTimer: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setTimerId(state, action: PayloadAction<number>) {
      state.timerId = action.payload;
    },

    setComplete(state) {
      state.currentRound += 0.5;

      state.isPlaying = false;
      clearInterval(state.timerId);

      const currentRoundType = getCurrentRoundType(
        state.currentRound,
        state.rounds
      );

      console.log(currentRoundType, state.currentRound);

      switch (currentRoundType) {
        case "focus":
          state.currentRoundType = "focus";
          state.time = convertMinutesToSeconds(state.focusDuration);
          state.remainingTime = convertMinutesToSeconds(state.focusDuration);
          break;

        case "break":
          state.currentRoundType = "break";
          state.time = convertMinutesToSeconds(state.breakDuration);
          state.remainingTime = convertMinutesToSeconds(state.breakDuration);
          break;

        default:
          state.currentRound = 0;
          state.currentRoundType = "initial";
          state.time = convertMinutesToSeconds(state.focusDuration);
          state.remainingTime = convertMinutesToSeconds(state.focusDuration);
          break;
      }
    },

    setTime(state, action: PayloadAction<number>) {
      state.time = action.payload;
      state.remainingTime = action.payload;
      state.isPlaying = false;
      state.currentRound = 0;
      state.currentRoundType = "initial";
    },
  },
});

export const {
  tickTimer,
  setTimerId,
  toggleTimer,
  setComplete,
  startTimer,
  setTime,
} = timerSlice.actions;

export default timerSlice.reducer;
