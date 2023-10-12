import { ReactNode } from "react";

import { Status } from "../Status";

export const getRoundsStatus = (
	rounds: number,
	currentRound: number
): ReactNode => {
	let roundsLeft = currentRound;

	const roundsStatus = Array.from({ length: rounds }).map((_, index) => {
		if (roundsLeft === 0.5) {
			roundsLeft -= 1;
			return <Status key={index} type="halfFilled" />;
		}

		if (roundsLeft > 0.5) {
			roundsLeft -= 1;
			return <Status key={index} type="filled" />;
		}

		roundsLeft -= 1;
		return <Status key={index} type="empty" />;
	});

	return roundsStatus;
};
