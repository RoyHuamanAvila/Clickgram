import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { RootState } from "../../app/store";

export interface AuthState {
  user?: User;
  token?: string;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    getTokenLocalStorage: (state) => {
      const token = localStorage.getItem("token");
      state.token = token!;
    },
  },
});

export const { getTokenLocalStorage: getToken } = authSlice.actions;
export const selectToken = (state: RootState) => state.application.token;
export default authSlice.reducer;
