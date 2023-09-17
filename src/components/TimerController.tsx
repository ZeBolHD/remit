import { useDispatch, useSelector } from "react-redux";
import { selectTimer } from "../redux/selectors";
import { setTimerId, tickTimer, toggleTimer } from "../redux/timer/slice";

import PlaySVG from "/timer/play.svg";
import PauseSVG from "/timer/pause.svg";
import SkipSVG from "/timer/skip.svg";

export const TimerController = () => {
  const { isPlaying, timerId } = useSelector(selectTimer);

  const dispatch = useDispatch();

  const handlePlay = () => {
    if (isPlaying) {
      clearInterval(timerId);
      dispatch(toggleTimer());
    } else {
      const timerId = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);

      dispatch(toggleTimer());
      dispatch(setTimerId(timerId));
    }
  };

  return (
    <div
      className="w-full h-[50px] box-border flex items-center justify-center border-[2px] border-primary
      rounded-large mb-0 mt-auto"
    >
      <button onClick={handlePlay}>
        <img src={isPlaying ? PauseSVG : PlaySVG} alt="" />
      </button>
    </div>
  );
};
