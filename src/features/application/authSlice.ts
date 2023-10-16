import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DecodedToken, UserLogged } from "../../interfaces";
import { RootState } from "../../app/store";
import { LoginAuthDto, RegisterAuthDto } from "../../interfaces/dto";
import { decodeToken, isExpired } from "react-jwt";
import axios from "axios";
import { toast } from "sonner";

export const axiosLogin = createAsyncThunk(
  "auth/login",
  async (userObject: LoginAuthDto, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DATABASE_URL}/auth/login`,
        userObject
      );
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      throw new Error("Login failed");
    }
  }
);
export interface AuthState {
  decodedToken?: DecodedToken;
  token?: string;
  isAuthenticated: boolean;
  userId?: string;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  status: "idle",
  error: "",
};

const authSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    getTokenLocalStorage: (state) => {
      const token = localStorage.getItem("token");
      if (token) state.token = token;
    },
    verifyToken: (state) => {
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
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      axiosLogin.fulfilled,
      (state, action: PayloadAction<{ token: string; user: UserLogged }>) => {
        state.isAuthenticated = true;
        state.status = "fulfilled";
        state.userId = action.payload.user._id;
      }
    );
    builder.addCase(axiosLogin.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(axiosLogin.rejected, (state, action) => {
      state.status = "rejected";
      if (action.error) {
        state.error = action.error.message || "Login failed";
        toast.error(action.error.message);
      }
    });
  },
});

export const { getTokenLocalStorage, verifyToken, signOff } = authSlice.actions;
export const selectToken = (state: RootState) => state.application.token;
export default authSlice.reducer;
