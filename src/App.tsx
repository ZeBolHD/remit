import { Header, NavBar, Timer, Stats, Tags, Settings } from "./components";

import { Tabs } from "./types";

import { IconContext } from "react-icons";
import { useState } from "react";

export const App = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.REMIT);

  const selectTab = (tab: Tabs) => {
    setCurrentTab(tab);
  };

  return (
    <main
      className="text-primary-dark  dark:text-primary w-full h-full flex flex-col overflow-hidden
      px-[45px] py-[30px] m-0 relative"
    >
      <Header currentTab={currentTab} />
      <IconContext.Provider
        value={{
          size: "35px",
          className: "dark:stroke-primary stroke-primary-dark",
        }}
      >
        <section className="h-full m-full flex flex-col items-center justify-center">
          {currentTab === Tabs.REMIT && <Timer />}
          {currentTab === Tabs.STATS && <Stats />}
          {currentTab === Tabs.TAGS && <Tags />}
          {currentTab === Tabs.SETTINGS && <Settings />}
        </section>
        <NavBar currentTab={currentTab} selectTab={selectTab} />
      </IconContext.Provider>
    </main>
  );
};
