import { IoChevronBack } from "react-icons/io5";

import moment from "moment";

interface WeekSelectorProps {
	selectedWeek: number;
	setNextWeek: () => void;
	setPreviousWeek: () => void;
}

export const WeekSelector = ({
	selectedWeek,
	setNextWeek,
	setPreviousWeek,
}: WeekSelectorProps) => {
	const dateToday = moment();
	const dateWithSelectedWeek = dateToday.add(selectedWeek, "week");

	const dateMonday = dateWithSelectedWeek.startOf("week").format("DD");
	const dateSunday = dateWithSelectedWeek.endOf("week").format("DD");
	const month = dateWithSelectedWeek.format("MMM");
	const year = dateWithSelectedWeek.format("YYYY");

	const selectedDate = `${dateMonday} - ${dateSunday} ${month} ${year}`;

	return (
		<div className="w-full h-fit mt-[20px] flex justify-between text-[20px] items-center laptop:text-[30px]">
			<button
				className="laptop:mr-[30px] laptop:m-auto"
				onClick={setPreviousWeek}
			>
				<IoChevronBack size={30} />
			</button>
			<p>{selectedDate}</p>
			<button className="laptop:ml-[30px] laptop:m-auto" onClick={setNextWeek}>
				<IoChevronBack className="transform rotate-180" size={30} />
			</button>
		</div>
	);
};
