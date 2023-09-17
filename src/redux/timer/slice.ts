import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    },

    toggleTimer: (state) => {
      state.isPlaying = !state.isPlaying;
    },

    setTimerId(state, action: PayloadAction<number>) {
      state.timerId = action.payload;
    },

    resetTimer(state) {
      state.time = initialState.time;
      state.remainingTime = initialState.remainingTime;
      state.isPlaying = false;
      state.isStarted = false;

      clearInterval(state.timerId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase("startTimer", () => {});
  },
});

export const { tickTimer, setTimerId, toggleTimer, resetTimer, startTimer } =
  timerSlice.actions;

export default timerSlice.reducer;
