import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { formatTime } from "../../helpers/formatTimer";
import { selectTimer } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import { setTimerId, handleTimer, toggleTimer } from "../../redux/timer/slice";

export const Timer = () => {
  const { isPlaying, remainingTime, timerId, time } = useSelector(selectTimer);
  const dispatch = useAppDispatch();

  const handlePlay = () => {
    if (isPlaying) {
      clearInterval(timerId);
      dispatch(toggleTimer());
    } else {
      const timerId = setInterval(() => {
        dispatch(handleTimer());
      }, 1000);

      dispatch(toggleTimer());
      dispatch(setTimerId(timerId));
    }
  };

  // useEffect(() => {
  // const interval = setInterval(tick, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="text-center h-full flex flex-col items-center w-full ">
      <h2 className="text-[100px] font-normal h-fit">{remainingTime}</h2>
      <button onClick={handlePlay}>{isPlaying ? "Stop" : "Play"}</button>
    </div>
  );
};
