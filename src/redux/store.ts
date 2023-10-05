import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import timerReducer from "./timer/slice";
import tagsReducer from "./tags/slice";

const timerPersistConfig = {
  key: "timer",
  storage,
  blacklist: ["isStarted", "isPlaying"],
};

const tagsPersistConfig = {
  key: "tags",
  storage,
};

const rootReducer = combineReducers({
  timer: persistReducer(timerPersistConfig, timerReducer),
  tags: persistReducer(tagsPersistConfig, tagsReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
