import { describe, expect, it } from "vitest";
import AuthSlice, {
  AuthState,
  axiosLogin,
  getTokenLocalStorage,
  signOff,
  verifyToken,
} from "./authSlice";

const initialState: AuthState = {
  isAuthenticated: false,
  status: "idle",
  error: "",
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGMzNjI0NjBkMjVjMDY3ZTlhODBjZCIsInVzZXJuYW1lIjoicm95YW5kcmVzZGV2IiwiZnVsbG5hbWUiOiJSb3kgSHVhbWFuIEF2aWxhIiwiaWF0IjoxNjk3NDExNTU1LCJleHAiOjE2OTc0ODM1NTV9.whF3zJ_y5oXDSTbG7s8sk32m081nOY3c9cwiD_sQA-A";

describe("AuthSlice", () => {
  describe("getTokenLocalStorage", () => {
    it("should set token from localStorage", () => {
      localStorage.setItem("token", "test");
      const state = AuthSlice(initialState, getTokenLocalStorage());

      expect(state.token).toBe("test");
    });

    it("should not set token from localStorage", () => {
      localStorage.removeItem("token");
      const state = AuthSlice(initialState, getTokenLocalStorage());

      expect(state.token).toBeUndefined();
    });
  });

  describe("verifyToken", () => {
    /* it("should set isAuthenticated to true", () => {
      localStorage.setItem("token", token);
      const state = AuthSlice(initialState, verifyToken());

      expect(state.isAuthenticated).toBeTruthy();
    }); */

    it("should set isAuthenticated to false", () => {
      localStorage.removeItem("token");
      const state = AuthSlice(initialState, verifyToken());

      expect(state.isAuthenticated).toBeFalsy();
    });
  });

  describe("signOff", () => {
    it("should remove token from localStorage when signOff", () => {
      localStorage.setItem("token", token);
      const state = AuthSlice(initialState, signOff());

      expect(state.token).toBeUndefined();
      expect(localStorage.getItem("token")).toBeNull();
    });
  });

  describe("axiosLogin", () => {
    it("should initial state", () => {
      const state = AuthSlice(initialState, {
        type: undefined,
      });

      expect(state.isAuthenticated).toBeFalsy();
      expect(state.status).toBe("idle");
    });

    it("login fulfilled", () => {
      const state = AuthSlice(initialState, {
        type: axiosLogin.fulfilled,
        payload: {
          token,
          user: {
            _id: "id",
            username: "username",
            fullname: "fullname",
            email: "email",
            avatar: "avatar",
            createdAt: "createdAt",
            updatedAt: "updatedAt",
          },
        },
      });

      expect(state.isAuthenticated).toBeTruthy();
      expect(state.status).toBe("fulfilled");
    });

    it("login pending", () => {
      const state = AuthSlice(initialState, {
        type: axiosLogin.pending,
      });

      expect(state.status).toBe("pending");
      expect(state.isAuthenticated).toBeFalsy();
    });

    it("login rejected", () => {
      const state = AuthSlice(initialState, {
        type: axiosLogin.rejected,
      });

      expect(state.status).toBe("rejected");
      expect(state.isAuthenticated).toBeFalsy();
      console.log(state.error);
    });
  });
  /* it("test correct login with real user", async () => {
    const payload: LoginAuthDto = {
      email: process.env.VITE_TEST_EMAIL || "",
      password: process.env.VITE_TEST_PASSWORD || "",
    };

    const store = configureStore({ reducer: AuthSlice });

    await store.dispatch(axiosLogin(payload));

    expect(store.getState().isAuthenticated).toBeTruthy();
  }); */
});
