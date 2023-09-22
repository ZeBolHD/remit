import { useState } from "react";
import { SettingsItem } from "./SettingsItem";

export const Settings = () => {
  const [settings, setSettings] = useState(null);

  return (
    <div
      className="w-[300px] box-border h-[360px] border-[2px] border-primary-dark dark:border-primary
      rounded-medium py-[25px] px-[50px]"
    >
      <ul className="flex flex-col justify-between h-full">
        <SettingsItem label="Focus" min={10} max={60} step={5} key="Focus" />
        <SettingsItem label="Break" min={10} max={60} step={5} key="Break" />
        <SettingsItem label="Rounds" min={10} max={60} step={5} key="Rounds" />
      </ul>
    </div>
  );
};
