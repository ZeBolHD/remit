import { ReactNode } from "react";

interface NavBarItemProps {
  children: ReactNode;
  onClick: () => void;
}

export const NavBarItem = ({ children, onClick }: NavBarItemProps) => {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      {children}
    </li>
  );
};
