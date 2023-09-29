import { CurrentRoundType } from "../../../types";

export const getCurrentRoundType = (
  currentRound: number,
  rounds: number
): CurrentRoundType => {
  if (currentRound === rounds) {
    return "initial";
  }

  if ((currentRound * 10) % 10 === 5) {
    return "focus";
  }

  return "break";
};
