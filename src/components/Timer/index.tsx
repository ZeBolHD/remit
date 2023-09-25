import { useSelector } from "react-redux";
import { selectTimer } from "../../redux/selectors";

import { formatTime } from "../../helpers/formatTimer";

import { TimerController } from "../TimerController";

export const Timer = () => {
  const { remainingTime } = useSelector(selectTimer);

  return (
    <div className="text-center h-full flex flex-col items-center w-full ">
      <h2 className="text-[100px] font-normal h-fit m-auto">
        {formatTime(remainingTime)}
      </h2>
      <TimerController />
    </div>
  );
};
