import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { formatTime } from "../../helpers/formatTimer";
import { selectTimer } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import {
  resetTimer,
  setTimerId,
  tickTimer,
  toggleTimer,
} from "../../redux/timer/slice";
import { TimerController } from "../TimerController";

export const Timer = () => {
  const { remainingTime, timerId } = useSelector(selectTimer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (remainingTime === 0) {
      clearInterval(timerId);
      dispatch(resetTimer());
    }
  });

  return (
    <div className="text-center h-full flex flex-col items-center w-full ">
      <h2 className="text-[100px] font-normal h-fit m-auto">
        {formatTime(remainingTime)}
      </h2>
      <TimerController />
    </div>
  );
};
