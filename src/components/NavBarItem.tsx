import { ReactNode } from "react";

interface NavBarItemProps {
  children: ReactNode;
  isActive?: boolean;
}

export const NavBarItem = ({ children, isActive }: NavBarItemProps) => {
  return (
    <li
      className={`${
        isActive
          ? "!stroke-active"
          : `stroke-primary-dark dark:stroke-primary 
        fill-primary-dark dark:fill-primary`
      }`}
    >
      {children}
    </li>
  );
};
