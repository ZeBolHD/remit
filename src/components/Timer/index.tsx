import { useSelector } from "react-redux";

import { selectTimer } from "../../redux/selectors";

import { formatTime } from "../../helpers/formatTimer";

import { TimerController } from "../TimerController";
import { RoundsStatus } from "../RoundsStatus";

export const Timer = () => {
	const { time } = useSelector(selectTimer);

	const timeFormatted = formatTime(time);

	return (
		<div className="text-center h-full flex flex-col items-center w-full ">
			<h2 className="text-[100px] font-normal h-fit m-auto">{timeFormatted}</h2>
			<RoundsStatus />
			<TimerController />
		</div>
	);
};
