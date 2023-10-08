import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { DecodedToken } from "../../interfaces";
import { RootState } from "../../app/store";
import { LoginAuthDto, RegisterAuthDto } from "../../interfaces/dto";
import { decodeToken, isExpired } from "react-jwt";
import axios from "axios";

export const axiosLogin = createAsyncThunk(
  "auth/login",
  async (userObject: LoginAuthDto) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DATABASE_URL}/auth/login`,
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
        `${import.meta.env.VITE_DATABASE_URL}/auth/register`,
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
  decodedToken?: DecodedToken;
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
      if (token) state.token = token;
    },
    authenticateUser: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = decodeToken(token);
        const expired = isExpired(token);
        if (decodedToken && !expired) {
          state.isAuthenticated = true;
          state.decodedToken = decodedToken as DecodedToken;
        }
      }
    },
    signOff: (state) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosLogin.fulfilled, (state, action) => {
      return { ...action.payload, isAuthenticated: true };
    });
  },
});

export const {
  getTokenLocalStorage: getToken,
  authenticateUser,
  signOff,
} = authSlice.actions;
export const selectToken = (state: RootState) => state.application.token;
export default authSlice.reducer;
