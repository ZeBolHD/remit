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
			className="text-primary-dark dark:text-primary w-full h-full flex flex-col overflow-hidden
      px-[45px] py-[15px] relative 
			mobile:w-[350px] mobile:m-auto mobile:px-0 
			laptop:flex-row laptop:w-full laptop:py-[60px] laptop:max-w-[1024px]
			"
		>
			<div className="w-full flex flex-col flex-1">
				<Header currentTab={currentTab} />
				<section className="h-full w-full flex flex-col items-center">
					{TabsComponents[currentTab]}
				</section>
			</div>
			<NavBar currentTab={currentTab} selectTab={selectTab} />
		</main>
	);
};
