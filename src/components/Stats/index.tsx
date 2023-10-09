import { useState } from "react";
import { Diagram } from "./Diagram";
import { WeekSelector } from "./WeekSelector";

export const Stats = () => {
	const [selectedWeek, setSelectedWeek] = useState(0);

	const setPreviousWeek = () => {
		setSelectedWeek((w) => w - 1);
	};

	const setNextWeek = () => {
		setSelectedWeek((w) => w + 1);
	};

	return (
		<div className="mt-[50px] h-full w-full text-center">
			<h2 className="text-[30px]">15 sessions</h2>
			<WeekSelector
				selectedWeek={selectedWeek}
				setNextWeek={setNextWeek}
				setPreviousWeek={setPreviousWeek}
			/>

			<Diagram />
		</div>
	);
};
