import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserLogged } from "../../interfaces";
import axios from "axios";
import { toast } from "sonner";

export const axiosUpdatePicture = createAsyncThunk(
  "user/edit-picture",
  async (file: File) => {
    let pictureFormData = new FormData();
    pictureFormData.append("picture", file);
    const response = await axios.patch(
      "http://localhost:3000/user/edit/picture",
      pictureFormData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const picture = response.data.picture;
    return picture;
  }
);

export const axiosGetUser = createAsyncThunk("user/get", async (id: string) => {
  const response = await axios.get(`http://localhost:3000/user/${id}`);
  const data = await response.data;

  return data;
});

export const axiosGetUserByUsername = createAsyncThunk(
  "user/getUserByUsername",
  async (username: string) => {
    const response = await axios.get(
      `http://localhost:3000/user/username/${username}`
    );
    const data = await response.data;

    return data;
  }
);

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
      toast.success("Ahora sigues a este usuario");
    });
    builder.addCase(axiosFollowUser.rejected, () => {
      toast.error("Error al seguir a este usuario");
    });
    builder.addCase(axiosUnfollowUser.fulfilled, (state, action) => {
      state.data = action.payload;
      toast.success("Dejaste de seguir a este usuario");
    });
    builder.addCase(axiosUpdatePicture.fulfilled, (state, action) => {
      state.data.picture = action.payload;
      toast.success("Se cambio su foto de perfil");
    });
  },
});

export default userSlice.reducer;
