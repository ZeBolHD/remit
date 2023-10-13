import { ReactNode } from "react";

import { AnimationProps, motion } from "framer-motion";

interface ButtonProps
	extends Pick<AnimationProps, "initial" | "animate" | "exit"> {
	children: ReactNode;
	onClick: () => void;
}

export const Button = ({
	children,
	onClick,
	...animationProps
}: ButtonProps) => {
	return (
		<motion.button
			className="absolute w-[35px] h-[35px] laptop:h-[40px] laptop:w-[40px]"
			onClick={onClick}
			{...animationProps}
			transition={{
				duration: 0.3,
				type: "spring",
				damping: 30,
				stiffness: 450,
			}}
		>
			{children}
		</motion.button>
	);
};
