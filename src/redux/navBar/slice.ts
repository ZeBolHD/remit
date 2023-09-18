import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tabs } from "../../types";

interface NavBarState {
  activeTab: Tabs;
}

const initialState: NavBarState = {
  activeTab: Tabs.REMIT,
};

export const navBarSlice = createSlice({
  initialState,
  name: "navBar",
  reducers: {
    setTab(state, action: PayloadAction<Tabs>) {
      state.activeTab = action.payload;
    },
  },
});

export const { setTab } = navBarSlice.actions;
export default navBarSlice.reducer;
