import { Tabs } from "../../types";

import { NavBarItem } from "./NavBarItem";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
  AiOutlineLineChart,
  AiOutlineClockCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";

export const NavBar = ({
  currentTab,
  selectTab,
}: {
  currentTab: Tabs;
  selectTab: (tab: Tabs) => void;
}) => {
  return (
    <nav
      className="box-border w-full min-h-[80px] px-[45px] mt-[25px]
      border-[2px] dark:border-primary border-primary-dark rounded-medium"
    >
      <ul className="flex justify-between h-full items-center">
        <NavBarItem key={Tabs.REMIT}>
          <AiOutlineClockCircle
            onClick={() => selectTab(Tabs.REMIT)}
            className={
              currentTab === Tabs.REMIT ? "!stroke-active !fill-active" : ""
            }
          />
        </NavBarItem>
        <NavBarItem key={Tabs.STATS}>
          <AiOutlineLineChart
            onClick={() => selectTab(Tabs.STATS)}
            className={
              currentTab === Tabs.STATS ? "!stroke-active !fill-active" : ""
            }
          />
        </NavBarItem>
        <NavBarItem key={Tabs.TAGS}>
          <AiOutlineUnorderedList
            onClick={() => selectTab(Tabs.TAGS)}
            className={
              currentTab === Tabs.TAGS ? "!stroke-active !fill-active" : ""
            }
          />
        </NavBarItem>
        <NavBarItem key={Tabs.SETTINGS}>
          <HiOutlineAdjustmentsHorizontal
            onClick={() => selectTab(Tabs.SETTINGS)}
            className={currentTab === Tabs.SETTINGS ? "!stroke-active" : ""}
          />
        </NavBarItem>
      </ul>
    </nav>
  );
};
