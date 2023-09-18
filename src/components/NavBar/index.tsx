import { NavBarItem } from "../NavBarItem";

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import {
  AiOutlineLineChart,
  AiOutlineClockCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";

export const NavBar = () => {
  const isActive = true;

  return (
    <nav
      className="box-border w-full min-h-[80px] px-[45px] mt-[25px]
      border-[2px] dark:border-primary border-primary-dark rounded-medium"
    >
      <ul className="flex justify-between h-full items-center">
        <NavBarItem isActive key={"timer"}>
          <AiOutlineClockCircle
            className={isActive ? "!stroke-active !fill-active" : ""}
          />
        </NavBarItem>
        <NavBarItem key={"stats"}>
          <AiOutlineLineChart />
        </NavBarItem>
        <NavBarItem key={"tags"}>
          <AiOutlineUnorderedList />
        </NavBarItem>
        <NavBarItem key={"settings"}>
          <HiOutlineAdjustmentsHorizontal />
        </NavBarItem>
      </ul>
    </nav>
  );
};
