import debounce from "lodash.debounce";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../redux/timer/slice";

import { SettingsItem } from "./SettingsItem";

export interface SettingsProps {
  focusDuration: number;
  breakDuration: number;
  rounds: number;
}

const initialSettings: SettingsProps = {
  focusDuration: 30,
  breakDuration: 10,
  rounds: 2,
};

export const Settings = () => {
  const [settings, setSettings] = useState<SettingsProps>(initialSettings);

  const dispatch = useDispatch();

  const updateSettings = debounce((key: keyof SettingsProps, value: number) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    if (key === "focusDuration") {
      dispatch(setTime(value));
    }
    console.log("settings changed");
  }, 300);

  return (
    <div
      className="w-[300px] box-border h-[360px] border-[2px] border-primary-dark dark:border-primary
      rounded-medium py-[25px] px-[50px]"
    >
      <ul className="flex flex-col justify-between h-full">
        <SettingsItem
          initialValue={settings.focusDuration}
          name="focusDuration"
          handleChange={updateSettings}
          label="Focus"
          min={10}
          max={60}
          step={5}
          isTime
          key="Focus"
        />
        <SettingsItem
          initialValue={settings.breakDuration}
          name="breakDuration"
          handleChange={updateSettings}
          label="Break"
          min={10}
          max={60}
          step={5}
          isTime
          key="Break"
        />
        <SettingsItem
          initialValue={settings.rounds}
          name="rounds"
          handleChange={updateSettings}
          label="Rounds"
          min={1}
          max={4}
          step={1}
          key="Rounds"
        />
      </ul>
    </div>
  );
};
