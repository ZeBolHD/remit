import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { SettingsItem } from "./SettingsItem";
import { TimerSettings } from "../../redux/timer/types";
import { selectTimer } from "../../redux/selectors";
import { setTimerSettings } from "../../redux/timer/slice";

import debounce from "lodash.debounce";

export const Settings = () => {
  const { focusDuration, breakDuration, rounds } = useSelector(selectTimer);

  const [settings, setSettings] = useState<TimerSettings>({
    focusDuration,
    breakDuration,
    rounds,
  });

  const dispatch = useDispatch();

  const updateSettings = debounce((key: keyof TimerSettings, value: number) => {
    setSettings((prev) => ({ ...prev, [key]: value }));

    dispatch(setTimerSettings(settings));

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
          min={5}
          max={30}
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
