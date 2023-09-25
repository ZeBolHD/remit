import { CurrentRoundType } from "../types";

export const getCurrentRoundType = (
  currentRound: number,
  rounds: number
): CurrentRoundType => {
  if (currentRound === rounds) {
    return "initial";
  }

  if (currentRound % 2 === 1) {
    return "focus";
  }

  return "break";
};
