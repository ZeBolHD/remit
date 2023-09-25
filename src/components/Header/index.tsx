import { AnimatePresence } from "framer-motion";

import { HeaderItem } from "./HeaderItem";

import { useSelector } from "react-redux";
import { selectTimer } from "../../redux/selectors";
import { Tabs } from "../../types";

export const Header = ({ currentTab }: { currentTab: Tabs }) => {
  const { currentRoundType } = useSelector(selectTimer);

  return (
    <header className="text-center overflow-hidden h-[50px] w-full">
      <AnimatePresence>
        {currentTab === Tabs.REMIT && (
          <>
            <AnimatePresence>
              {currentRoundType === "focus" && (
                <HeaderItem heading="Stay Focused" />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {currentRoundType === "initial" && (
                <HeaderItem heading={Tabs.REMIT} />
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {currentTab === Tabs.STATS && <HeaderItem heading={Tabs.STATS} />}
      </AnimatePresence>
      <AnimatePresence>
        {currentTab === Tabs.TAGS && <HeaderItem heading={Tabs.TAGS} />}
      </AnimatePresence>
      <AnimatePresence>
        {currentTab === Tabs.SETTINGS && <HeaderItem heading={Tabs.SETTINGS} />}
      </AnimatePresence>
    </header>
  );
};
