import { TimerState } from "../types";
import { convertMinutesToSeconds } from "./convertMinutesToSeconds";

export const resetTimer = (state: TimerState) => {
  state.isPlaying = false;
  state.currentRound = 0;
  state.currentRoundType = "initial";
  state.time = convertMinutesToSeconds(state.focusDuration);
  clearInterval(state.timerId);
};
