import { RootState } from "./store";

export const selectTimer = (state: RootState) => state.timer;
export const selectNavBar = (state: RootState) => state.navBar;
