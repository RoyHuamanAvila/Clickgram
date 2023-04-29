import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/application/authSlice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    application: authSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
