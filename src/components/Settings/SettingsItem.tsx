import { useEffect, useRef, useState } from "react";

import { TimerSettings } from "../../redux/timer/types";

interface SettingsItemProps {
	initialValue: number;
	label: string;
	name: keyof TimerSettings;
	step: number;
	min: number;
	max: number;
	isTime?: boolean;
	handleChange: (key: keyof TimerSettings, value: number) => void;
}

export const SettingsItem = ({
	initialValue,
	name,
	handleChange,
	isTime = false,
	label,
	...inputProps
}: SettingsItemProps) => {
	const [value, setValue] = useState(initialValue);

	const mountedRef = useRef(false);

	useEffect(() => {
		if (mountedRef.current) {
			handleChange(name, isTime ? value : value);
		}

		mountedRef.current = true;
	});

	return (
		<li className="text-center">
			<div className="flex flex-col laptop:flex-row justify-between">
				<label className="" htmlFor={label}>
					{label}
				</label>
				<span className="">{isTime ? `${value}:00` : value}</span>
			</div>
			<input
				className="range accent-primary-dark dark:accent-primary h-[13px] w-full laptop:h-[30px]"
				type="range"
				value={value}
				id={label}
				name={label}
				onChange={(e) => setValue(+e.target.value)}
				{...inputProps}
			/>
		</li>
	);
};
