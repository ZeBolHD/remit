import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";

import { selectTimer } from "../../redux/selectors";
import {
  setTimerId,
  startTimer,
  tickTimer,
  toggleTimer,
  resetTimer,
} from "../../redux/timer/slice";

import {
  IoPlayOutline,
  IoPauseOutline,
  IoPlayForwardOutline,
} from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

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

  const handleResetTimer = () => {
    dispatch(resetTimer());
  };

  return (
    <motion.div
      className={`w-full h-[50px] box-border relative flex items-center px-[60px] border-[2px] 
      rounded-large mb-0 mt-auto dark:border-primary border-primary-dark
      justify-center`}
    >
      {!isStarted && (
        <Button
          onClick={handleStartTimer}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <IoPlayOutline />
        </Button>
      )}

      <AnimatePresence>
        {isStarted && (
          <>
            <Button
              onClick={handleTimer}
              initial={{ left: "50%", translateX: "-50%" }}
              animate={{ left: "15%", translateX: 0 }}
              exit={{ left: "-5%", opacity: 0 }}
            >
              {isPlaying ? <IoPauseOutline /> : <IoPlayOutline />}
            </Button>
            <Button
              onClick={handleResetTimer}
              initial={{ right: "50%", translateX: "50%" }}
              animate={{ right: "15%", translateX: 0 }}
              exit={{ right: "-5%", opacity: 0 }}
            >
              <IoPlayForwardOutline />
            </Button>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
