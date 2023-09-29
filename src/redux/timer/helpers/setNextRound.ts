import { TimerState } from "../types";
import { convertMinutesToSeconds } from "./convertMinutesToSeconds";
import { getCurrentRoundType } from "./getCurrentRoundType";
import { resetTimer } from "./resetTimer";

export const setNextRound = (state: TimerState) => {
  state.currentRound += 0.5;

  if (state.currentRound > state.rounds) {
    resetTimer(state);
  }

  const currentRoundType = getCurrentRoundType(
    state.currentRound,
    state.rounds
  );

  switch (currentRoundType) {
    case "focus":
      state.currentRound += 1;
      state.currentRoundType = "focus";
      state.time = convertMinutesToSeconds(state.focusDuration);

      break;

    case "break":
      state.currentRound += 1;
      state.currentRoundType = "break";
      state.time = convertMinutesToSeconds(state.breakDuration);

      break;

    default:
      state.currentRound = state.rounds;
      state.currentRoundType = "initial";
      state.time = convertMinutesToSeconds(state.focusDuration);

      break;
  }
};
