import { IoChevronBack } from "react-icons/io5";

import { Moment } from "moment";

interface WeekSelectorProps {
	dateWithSelectedWeek: Moment;
	selectedWeek: number;
	dateMonday: Moment;
	dateSunday: Moment;
	setNextWeek: () => void;
	setPreviousWeek: () => void;
}

export const WeekSelector = ({
	dateWithSelectedWeek,
	dateMonday,
	dateSunday,
	setNextWeek,
	setPreviousWeek,
}: WeekSelectorProps) => {
	const month = dateWithSelectedWeek.format("MMM");
	const year = dateWithSelectedWeek.format("YYYY");

	const dateMondayFormatted = dateMonday.format("DD");
	const dateSundayFormatted = dateSunday.format("DD");

	const selectedDate = `${dateMondayFormatted} - ${dateSundayFormatted} ${month} ${year}`;

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
