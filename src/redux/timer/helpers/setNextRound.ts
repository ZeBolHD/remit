import { CurrentRoundType } from "../../../types";
import { TimerState } from "../types";

import { convertMinutesToSeconds } from "./convertMinutesToSeconds";
import { getCurrentRoundType } from "./getCurrentRoundType";
import { resetTimer } from "./resetTimer";

const setTimerStateByType = (state: TimerState, type: CurrentRoundType) => {
	switch (type) {
		case "focus":
			state.currentRoundType = "focus";
			state.time = convertMinutesToSeconds(state.focusDuration);

			break;

		case "break":
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

export const setNextRound = (state: TimerState) => {
	state.currentRound += 0.5;

	if (state.currentRound >= state.rounds) {
		resetTimer(state);
		return;
	}

	const currentRoundType = getCurrentRoundType(
		state.currentRound,
		state.rounds
	);

	setTimerStateByType(state, currentRoundType);
};
