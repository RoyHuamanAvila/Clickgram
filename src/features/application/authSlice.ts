import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogged } from "../../interfaces";
import { RootState } from "../../app/store";
import { LoginAuthDto, RegisterAuthDto } from "../../interfaces/dto";
import axios from "axios";

export const axiosLogin = createAsyncThunk(
  "auth/login",
  async (userObject: LoginAuthDto) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/login`,
        userObject
      );
      const data = await response.data;
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const axiosRegister = createAsyncThunk(
  "auth/register",
  async (userObject: RegisterAuthDto) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/auth/register`,
        userObject
      );
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export interface AuthState {
  user?: UserLogged;
  token?: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    getTokenLocalStorage: (state) => {
      const token = localStorage.getItem("token");
      state.token = token!;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosLogin.fulfilled, (state, action) => {
      return { ...action.payload, isAuthenticated: true };
    });
  },
});

export const { getTokenLocalStorage: getToken } = authSlice.actions;
export const selectToken = (state: RootState) => state.application.token;
export default authSlice.reducer;
