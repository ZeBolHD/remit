import { CurrentRoundType } from "../../types";

export interface TimerSettings {
  focusDuration: number;
  breakDuration: number;
  rounds: number;
}

export interface TimerState extends TimerSettings {
  time: number;
  timerId: number;
  isPlaying: boolean;
  currentRound: number;
  currentRoundType: CurrentRoundType;
}
