import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";

import { selectTimer } from "../../redux/selectors";
import {
  setTimerId,
  startTimer,
  tickTimer,
  toggleTimer,
} from "../../redux/timer/slice";

import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

export const TimerController = () => {
  const { isPlaying, timerId, isStarted } = useSelector(selectTimer);

  const dispatch = useDispatch();

  const handleTimer = () => {
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

  const handleStartTimer = () => {
    if (!isStarted) {
      dispatch(startTimer());

      const timerId = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);

      dispatch(setTimerId(timerId));
    }
  };

  return (
    <div
      className={`w-full h-[50px] box-border flex items-center justify-center border-[2px] 
      rounded-large mb-0 mt-auto dark:border-primary border-primary-dark`}
    >
      {!isStarted ? (
        <button onClick={handleStartTimer}>
          {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
        </button>
      ) : null}
    </div>
  );
};
