import { NavBarItem } from "../NavBarItem";

import { IoTimeOutline } from "react-icons/io5";

export const NavBar = () => {
  const isActive = true;

  return (
    <nav
      className="box-border w-full min-h-[80px] px-[45px] mt-[25px]
      border-[2px] dark:border-primary border-primary-dark rounded-medium"
    >
      <ul className="flex justify-between h-full items-center">
        <NavBarItem isActive key={"timer"}>
          <IoTimeOutline className={isActive ? "!stroke-active" : ""} />
        </NavBarItem>
        <NavBarItem key={"stats"}>
          <IoTimeOutline />
        </NavBarItem>
        <NavBarItem key={"tags"}>
          <IoTimeOutline />
        </NavBarItem>
        <NavBarItem key={"settings"}>
          <IoTimeOutline />
        </NavBarItem>
      </ul>
    </nav>
  );
};
