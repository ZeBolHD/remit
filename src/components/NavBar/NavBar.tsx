import TimerSVG from "/navbar/timer.svg";
import StatsSVG from "/navbar/stats.svg";
import TagsSVG from "/navbar/tags.svg";
import SettingsSVG from "/navbar/settings.svg";
import { NavBarItem } from "../NavBarItem";
import { TimerIcon } from "./Icons/TimerIcon";

import { ReactSVG } from "react-svg";

export const NavBar = () => {
  return (
    <nav
      className="box-border w-full min-h-[80px] px-[45px] mt-[25px]
      border-[2px] border-primary rounded-medium"
    >
      <ul className="flex justify-between h-full items-center">
        <NavBarItem isActive>
          <TimerIcon />
        </NavBarItem>
        <NavBarItem>
          <TimerIcon />
        </NavBarItem>
        <NavBarItem>
          <TimerIcon />
        </NavBarItem>
        <NavBarItem>
          <TimerIcon />
        </NavBarItem>
      </ul>
    </nav>
  );
};
