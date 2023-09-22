import { memo, useEffect, useState } from "react";
import { SettingsProps } from "./";

interface SettingsItemProps {
  initialValue: number;
  label: string;
  name: keyof SettingsProps;
  step: number;
  min: number;
  max: number;
  isTime?: boolean;
  handleChange: (key: keyof SettingsProps, value: number) => void;
}

export const SettingsItem = memo(
  ({
    initialValue,
    name,
    handleChange,
    label,
    step,
    max,
    min,
    isTime = false,
  }: SettingsItemProps) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      handleChange(name, isTime ? value * 60 : value);
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
          step={step}
          min={min}
          max={max}
          name={label}
          onChange={(e) => setValue(+e.target.value)}
        />
      </li>
    );
  }
);
