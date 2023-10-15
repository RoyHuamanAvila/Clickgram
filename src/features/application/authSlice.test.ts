import { describe, expect, it } from "vitest";
import AuthSlice, { AuthState, axiosLogin } from "./authSlice";
import { LoginAuthDto } from "../../interfaces/dto";
import { configureStore } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isAuthenticated: false,
};

describe("AuthSlice", () => {
  it("initialize slice with initialValue", () => {
    const authSlice = AuthSlice(initialState, { type: undefined });

    expect(authSlice).toBe(initialState);
  });

  it("test correct login with real user", async () => {
    const payload: LoginAuthDto = {
      email: process.env.VITE_TEST_EMAIL || "",
      password: process.env.VITE_TEST_PASSWORD || "",
    };

    const store = configureStore({ reducer: AuthSlice });

    await store.dispatch(axiosLogin(payload));

    expect(store.getState().isAuthenticated).toBeTruthy();
  });
});
