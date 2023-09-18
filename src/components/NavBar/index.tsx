import { NavBarItem } from "../NavBarItem";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
  AiOutlineLineChart,
  AiOutlineClockCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectNavBar } from "../../redux/selectors";
import { Tabs } from "../../types";
import { setTab } from "../../redux/navBar/slice";

export const NavBar = () => {
  const { activeTab } = useSelector(selectNavBar);

  const dispatch = useDispatch();

  const handleTab = (tab: Tabs) => {
    dispatch(setTab(tab));
  };

  return (
    <nav
      className="box-border w-full min-h-[80px] px-[45px] mt-[25px]
      border-[2px] dark:border-primary border-primary-dark rounded-medium"
    >
      <ul className="flex justify-between h-full items-center">
        <NavBarItem key={Tabs.TIMER}>
          <AiOutlineClockCircle
            onClick={() => handleTab(Tabs.TIMER)}
            className={
              activeTab === Tabs.TIMER ? "!stroke-active !fill-active" : ""
            }
          />
        </NavBarItem>
        <NavBarItem key={Tabs.STATS}>
          <AiOutlineLineChart
            onClick={() => handleTab(Tabs.STATS)}
            className={
              activeTab === Tabs.STATS ? "!stroke-active !fill-active" : ""
            }
          />
        </NavBarItem>
        <NavBarItem key={Tabs.TAGS}>
          <AiOutlineUnorderedList
            onClick={() => handleTab(Tabs.TAGS)}
            className={
              activeTab === Tabs.TAGS ? "!stroke-active !fill-active" : ""
            }
          />
        </NavBarItem>
        <NavBarItem key={Tabs.SETTINGS}>
          <HiOutlineAdjustmentsHorizontal
            onClick={() => handleTab(Tabs.SETTINGS)}
            className={activeTab === Tabs.SETTINGS ? "!stroke-active" : ""}
          />
        </NavBarItem>
      </ul>
    </nav>
  );
};
