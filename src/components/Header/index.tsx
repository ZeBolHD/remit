import { AnimatePresence } from "framer-motion";

import { HeaderItem } from "./HeaderItem";

import { useSelector } from "react-redux";
import { selectNavBar, selectTimer } from "../../redux/selectors";
import { Tabs } from "../../types";

export const Header = () => {
  const { activeTab } = useSelector(selectNavBar);
  const { isStarted } = useSelector(selectTimer);

  return (
    <header className="text-center overflow-hidden">
      <AnimatePresence>
        {activeTab === Tabs.REMIT && (
          <HeaderItem>
            <AnimatePresence>
              {isStarted && <HeaderItem heading="Stay Focused" />}
            </AnimatePresence>

            <AnimatePresence>
              {!isStarted && <HeaderItem heading={Tabs.REMIT} />}
            </AnimatePresence>
          </HeaderItem>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeTab === Tabs.STATS && <HeaderItem heading={Tabs.STATS} />}
      </AnimatePresence>
      <AnimatePresence>
        {activeTab === Tabs.TAGS && <HeaderItem heading={Tabs.TAGS} />}
      </AnimatePresence>
      <AnimatePresence>
        {activeTab === Tabs.SETTINGS && <HeaderItem heading={Tabs.SETTINGS} />}
      </AnimatePresence>
    </header>
  );
};
