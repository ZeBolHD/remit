import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";

import { selectTimer } from "../../redux/selectors";

import { CurrentRoundType, Tabs } from "../../types";

import { HeaderItem } from "./HeaderItem";

const headerTabsItems: Record<Exclude<Tabs, Tabs.TIMER>, ReactNode> = {
	[Tabs.STATS]: <HeaderItem heading={Tabs.STATS} key={Tabs.STATS} />,
	[Tabs.TAGS]: <HeaderItem heading={Tabs.TAGS} key={Tabs.TAGS} />,
	[Tabs.SETTINGS]: <HeaderItem heading={Tabs.SETTINGS} key={Tabs.SETTINGS} />,
};

const headerTimerItems: Record<CurrentRoundType, ReactNode> = {
	initial: <HeaderItem heading="Remit" key="initial" />,
	focus: <HeaderItem heading="Stay focused" key="focus" />,
	break: <HeaderItem heading="Break time" key="break" />,
};

const getCurrentTimerHeaderItem = (
	currentTab: Tabs,
	currentRoundType: CurrentRoundType
): ReactNode => {
	if (currentTab === Tabs.TIMER) {
		return headerTimerItems[currentRoundType];
	}

	return headerTabsItems[currentTab];
};

export const Header = ({ currentTab }: { currentTab: Tabs }) => {
	const { currentRoundType } = useSelector(selectTimer);

	const currentTimerHeaderItem = getCurrentTimerHeaderItem(
		currentTab,
		currentRoundType
	);

	return (
		<header className="text-center overflow-hidden min-h-[60px] w-full relative laptop:h-[80px]">
			<AnimatePresence>{currentTimerHeaderItem}</AnimatePresence>
		</header>
	);
};
