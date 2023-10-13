import { ReactNode } from "react";

interface NavBarItemProps {
	children: ReactNode;
	onClick: () => void;
}

export const NavBarItem = ({ children, onClick }: NavBarItemProps) => {
	return (
		<li
			className="cursor-pointer w-[35px] h-[35px] laptop:w-[45px] laptop:h-[45px]"
			onClick={onClick}
		>
			{children}
		</li>
	);
};
