import { useState } from "react";

interface SettingsItemProps {
  label: string;
  step: number;
  min: number;
  max: number;
}

export const SettingsItem = ({ label, step, max, min }: SettingsItemProps) => {
  const [value, setValue] = useState(min);

  return (
    <li className="flex flex-col text-center text-[20px]">
      <label className="mb-[5px]" htmlFor={label}>
        {label}
      </label>
      <span className="mb-[5px]">{value}:00</span>
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
};
