import { useSelector } from "react-redux";
import { selectNavBar } from "./redux/selectors";

import { Header, NavBar, Timer, Stats, Tags, Settings } from "./components";

import { Tabs } from "./types";

import { IconContext } from "react-icons";

export const App = () => {
  const { activeTab } = useSelector(selectNavBar);

  return (
    <main
      className="text-primary-dark  dark:text-primary w-full h-full flex flex-col overflow-hidden
      px-[45px] py-[30px] m-0 relative"
    >
      <Header />
      <IconContext.Provider
        value={{
          size: "35px",
          className: "dark:stroke-primary stroke-primary-dark",
        }}
      >
        <section className="h-full m-full">
          {activeTab === Tabs.REMIT && <Timer />}
          {activeTab === Tabs.STATS && <Stats />}
          {activeTab === Tabs.TAGS && <Tags />}
          {activeTab === Tabs.SETTINGS && <Settings />}
        </section>
        <NavBar />
      </IconContext.Provider>
    </main>
  );
};
