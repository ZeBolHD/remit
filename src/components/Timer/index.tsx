import { useSelector } from "react-redux";

import { selectTimer } from "../../redux/selectors";

import { formatTime } from "../../helpers/formatTimer";

import { TimerController } from "../TimerController";
import { RoundsStatus } from "../RoundsStatus";
import { TagSelector } from "../TagSelector";

export const Timer = () => {
	const { time } = useSelector(selectTimer);

	const timeFormatted = formatTime(time);

	return (
		<div className="h-full w-full mt-[25px] flex flex-col items-center  relative">
			<TagSelector />
			<h2 className="text-[100px] font-normal h-fit m-auto">{timeFormatted}</h2>
			<RoundsStatus />
			<TimerController />
		</div>
	);
};
