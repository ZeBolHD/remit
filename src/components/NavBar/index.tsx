import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
	AiOutlineLineChart,
	AiOutlineClockCircle,
	AiOutlineUnorderedList,
} from "react-icons/ai";

import { Tabs } from "../../types";

import { NavBarItem } from "./NavBarItem";

interface NavBarProps {
	currentTab: Tabs;
	selectTab: (tab: Tabs) => void;
}

export const NavBar = ({ currentTab, selectTab }: NavBarProps) => {
	return (
		<nav
			className="box-border w-full min-h-[80px] px-[45px] mt-[25px]
      border-[2px] dark:border-primary border-primary-dark rounded-medium"
		>
			<ul className="flex justify-between h-full items-center">
				<NavBarItem key={Tabs.TIMER} onClick={() => selectTab(Tabs.TIMER)}>
					<AiOutlineClockCircle
						className={
							currentTab === Tabs.TIMER ? "!stroke-active !fill-active" : ""
						}
					/>
				</NavBarItem>
				<NavBarItem key={Tabs.STATS} onClick={() => selectTab(Tabs.STATS)}>
					<AiOutlineLineChart
						className={
							currentTab === Tabs.STATS ? "!stroke-active !fill-active" : ""
						}
					/>
				</NavBarItem>
				<NavBarItem key={Tabs.TAGS} onClick={() => selectTab(Tabs.TAGS)}>
					<AiOutlineUnorderedList
						className={
							currentTab === Tabs.TAGS ? "!stroke-active !fill-active" : ""
						}
					/>
				</NavBarItem>
				<NavBarItem
					key={Tabs.SETTINGS}
					onClick={() => selectTab(Tabs.SETTINGS)}
				>
					<HiOutlineAdjustmentsHorizontal
						className={currentTab === Tabs.SETTINGS ? "!stroke-active" : ""}
					/>
				</NavBarItem>
			</ul>
		</nav>
	);
};
