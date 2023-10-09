import { useSelector } from "react-redux";

import { selectTimer } from "../../redux/selectors";

import { getRoundsStatus } from "./helpers/getRoundsStatus";

export const RoundsStatus = () => {
	const { rounds, currentRound } = useSelector(selectTimer);

	const roundsStatus = getRoundsStatus(rounds, currentRound);

	return <ul className="flex">{roundsStatus}</ul>;
};
