import { ReactNode } from "react";

interface NavBarItemProps {
  children: ReactNode;
  isActive?: boolean;
}

export const NavBarItem = ({ children, isActive }: NavBarItemProps) => {
  return (
    <li className={`w-[30px] h-[30px] ${isActive ? "stroke-red-500" : ""}`}>
      {children}
    </li>
  );
};
