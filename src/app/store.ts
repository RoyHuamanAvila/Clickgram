import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/application/authSlice";

export const store = configureStore({
  reducer: {
    application: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
