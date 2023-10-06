import { RootState } from "./store";

export const selectTimer = (state: RootState) => state.timer;
export const selectTags = (state: RootState) => state.tags;
export const selectStats = (state: RootState) => state.stats;
