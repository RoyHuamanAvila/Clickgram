import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserLogged } from "../../interfaces";
import axios from "axios";

export const axiosGetUser = createAsyncThunk("user/get", async (id: string) => {
  const response = await axios.get(`http://localhost:3000/user/${id}`);
  const data = await response.data;

  return data;
});

export const axiosFollowUser = createAsyncThunk(
  "user/follow",
  async (idToFollow: string) => {
    const response = await axios.patch(
      `http://localhost:3000/user/follow/${idToFollow}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.data;
    return data;
  }
);

export const axiosUnfollowUser = createAsyncThunk(
  "user/unfollow",
  async (idToUnfollow: string) => {
    const response = await axios.patch(
      `http://localhost:3000/user/unfollow/${idToUnfollow}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.data;
    return data;
  }
);

export interface UserState {
  data: UserLogged;
}

const initialState: UserState = {
  data: {
    _id: "",
    fullname: "",
    picture: "",
    username: "",
    email: "",
    password: "",
    followers: [],
    follows: [],
    __v: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(axiosGetUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(axiosFollowUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(axiosUnfollowUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default userSlice.reducer;
