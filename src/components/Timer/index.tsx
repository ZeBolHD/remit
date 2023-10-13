import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTags, selectTimer } from "../../redux/selectors";

import { formatTime } from "../../helpers/formatTimer";

import { RoundsStatus } from "../RoundsStatus";
import { TagSelector } from "../TagSelector";
import { addCompletedRound } from "../../redux/tags/slice";
import { setComplete } from "../../redux/timer/slice";
import { addStatistic } from "../../redux/stats/slice";

import { TimerController } from "./TimerController";

export const Timer = () => {
	const { time, currentRoundType } = useSelector(selectTimer);
	const { currentTag } = useSelector(selectTags);

	const dispatch = useDispatch();

	const timeFormatted = formatTime(time);

	const onCompleteRound = () => {
		if (currentRoundType === "focus") {
			dispatch(addStatistic());

			if (currentTag) {
				dispatch(addCompletedRound(currentTag));
			}
		}

		dispatch(setComplete());
	};

	useEffect(() => {
		if (time === 0) {
			onCompleteRound();
		}
	});

	return (
		<div className="h-full w-full flex flex-col items-center mt-[50px] relative laptop:mt-[25px]">
			<TagSelector />
			<div className="h-fit text-center m-auto">
				<h2 className="text-[85px] font-normal h-fit m-auto laptop:text-[150px]">
					{timeFormatted}
				</h2>
				<RoundsStatus />
			</div>

			<TimerController onCompleteRound={onCompleteRound} />
		</div>
	);
};
