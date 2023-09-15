import { useEffect } from "react";

export const Header = () => {
  // useEffect(() => {
  //   document.body.setAttribute("data-theme", "dark");
  // }, []);

  return (
    <header className="p-[45px] text-center">
      <h1 className="text-[40px] font-normal">Remit</h1>
    </header>
  );
};
