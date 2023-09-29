import { useEffect, useState } from "react";

import { convertMinutesToSeconds } from "../../redux/timer/helpers/convertMinutesToSeconds";
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

  useEffect(() => {
    handleChange(name, isTime ? convertMinutesToSeconds(value) : value);
  }, [value]);

  return (
    <li className="flex flex-col text-center text-[20px]">
      <label className="mb-[5px]" htmlFor={label}>
        {label}
      </label>
      <span className="mb-[5px]">{isTime ? `${value}:00` : value}</span>
      <input
        className="range accent-primary-dark dark:accent-primary h-[13px]"
        type="range"
        value={value}
        name={label}
        onChange={(e) => setValue(+e.target.value)}
        {...inputProps}
      />
    </li>
  );
};
