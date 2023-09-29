import { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { SettingsItem } from "./SettingsItem";
import { TimerSettings } from "../../redux/timer/types";
import { selectTimer } from "../../redux/selectors";
import { setTimerSettings } from "../../redux/timer/slice";

import debounce from "lodash.debounce";

export const Settings = () => {
  const { focusDuration, breakDuration, rounds } = useSelector(selectTimer);

  const dispatch = useDispatch();

  const updateSettings = useCallback(
    debounce((key: keyof TimerSettings, value: number) => {
      dispatch(setTimerSettings({ key, value }));

      console.log("settings changed");
    }, 300),
    []
  );

  return (
    <div
      className="w-[300px] box-border h-[360px] border-[2px] border-primary-dark dark:border-primary
      rounded-medium py-[25px] px-[50px]"
    >
      <ul className="flex flex-col justify-between h-full">
        <SettingsItem
          initialValue={focusDuration}
          name="focusDuration"
          handleChange={updateSettings}
          label="Focus"
          min={10}
          max={60}
          step={5}
          isTime
          key="focus"
        />
        <SettingsItem
          initialValue={breakDuration}
          name="breakDuration"
          handleChange={updateSettings}
          label="Break"
          min={5}
          max={30}
          step={5}
          isTime
          key="break"
        />
        <SettingsItem
          initialValue={rounds}
          name="rounds"
          handleChange={updateSettings}
          label="Rounds"
          min={1}
          max={4}
          step={1}
          key="rounds"
        />
      </ul>
    </div>
  );
};
