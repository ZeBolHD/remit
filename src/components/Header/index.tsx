import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectNavBar } from "../../redux/selectors";
import { Tabs } from "../../types";
import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  const { activeTab } = useSelector(selectNavBar);

  return (
    <header className="text-center w-full overflow-hidden">
      <AnimatePresence>
        {activeTab === Tabs.REMIT && <HeaderItem heading={Tabs.REMIT} />}
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
