import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import timerReducer from "./timer/slice";

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    // navBar: navBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
