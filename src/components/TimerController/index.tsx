import { AnimatePresence, motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";

import {
	IoPlayOutline,
	IoPauseOutline,
	IoPlayForwardOutline,
} from "react-icons/io5";

import { selectTimer } from "../../redux/selectors";

import {
	setTimerId,
	startTimer,
	tickTimer,
	toggleTimer,
} from "../../redux/timer/slice";

import { Button } from "./Button";

interface TimerControllerProps {
	onCompleteRound: () => void;
}

export const TimerController = ({ onCompleteRound }: TimerControllerProps) => {
	const { isPlaying, timerId, currentRoundType } = useSelector(selectTimer);

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
		if (currentRoundType === "initial") {
			dispatch(startTimer());

			const timerId = setInterval(() => {
				dispatch(tickTimer());
			}, 1000);

			dispatch(setTimerId(timerId));
		}
	};

	return (
		<motion.div
			className={`w-full h-[50px] box-border relative flex items-center px-[60px] border-[2px] 
      rounded-large mb-0 mt-[50px] dark:border-primary border-primary-dark justify-center`}
		>
			{currentRoundType === "initial" && (
				<Button
					onClick={handleStartTimer}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<IoPlayOutline />
				</Button>
			)}

			<AnimatePresence>
				{currentRoundType !== "initial" && (
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
							onClick={onCompleteRound}
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
