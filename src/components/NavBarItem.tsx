import { ReactNode } from "react";

interface NavBarItemProps {
  children: ReactNode;
}

export const NavBarItem = ({ children }: NavBarItemProps) => {
  return <li>{children}</li>;
};
