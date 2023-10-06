export const enum Tabs {
  TIMER = "Timer",
  STATS = "Statistics",
  TAGS = "Tags",
  SETTINGS = "Settings",
}

export type CurrentRoundType = "initial" | "focus" | "break";

export type Tag = { name: string; completedRounds: number };
