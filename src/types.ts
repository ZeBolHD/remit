export const enum Tabs {
  TIMER = "Timer",
  STATS = "Stats",
  TAGS = "Tags",
  SETTINGS = "Settings",
}

export type CurrentRoundType = "initial" | "focus" | "break";

export type Tag = { name: string; completedRounds: number };
