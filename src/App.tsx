import { IconContext } from "react-icons";
import { ReactNode, useState } from "react";

import { Header, NavBar, Timer, Stats, Tags, Settings } from "./components";

import { Tabs } from "./types";

const TabsComponents: Record<Tabs, ReactNode> = {
	Timer: <Timer />,
	Statistics: <Stats />,
	Tags: <Tags />,
	Settings: <Settings />,
};

export const App = () => {
	const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.TIMER);

	const selectTab = (tab: Tabs) => {
		setCurrentTab(tab);
	};

	return (
		<main
			className="text-primary-dark  dark:text-primary w-full h-full flex flex-col overflow-hidden
      px-[45px] py-[30px] m-0 relative"
		>
			<Header currentTab={currentTab} />
			<IconContext.Provider
				value={{
					size: "35px",
					className: "dark:stroke-primary stroke-primary-dark",
				}}
			>
				<section className="h-full m-full flex flex-col items-center justify-center">
					{TabsComponents[currentTab]}
				</section>
				<NavBar currentTab={currentTab} selectTab={selectTab} />
			</IconContext.Provider>
		</main>
	);
};
