import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserLogged } from "../../interfaces";
import axios from "axios";
import { toast } from "sonner";
import { CreatePostDto, UpdateUserDto } from "../../interfaces/dto";

const token = localStorage.getItem("token");

export const axiosUpdateUser = createAsyncThunk(
  "user/update",
  async (objectUser: UpdateUserDto) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_DATABASE_URL}/user/update`,
      objectUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data: UpdateUserDto = response.data;
    return data;
  }
);

export const axiosUpdatePicture = createAsyncThunk(
  "user/edit-picture",
  async (file: File) => {
    const pictureFormData = new FormData();
    pictureFormData.append("picture", file);
    const response = await axios.patch(
      `${import.meta.env.VITE_DATABASE_URL}/user/edit/picture`,
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
  const response = await axios.get(
    `${import.meta.env.VITE_DATABASE_URL}/user/${id}`
  );
  const data = await response.data;

  return data;
});

export const axiosGetUserByUsername = createAsyncThunk(
  "user/getUserByUsername",
  async (username: string) => {
    const response = await axios.get(
      `${import.meta.env.VITE_DATABASE_URL}/user/username/${username}`
    );
    const data = await response.data;

    return data;
  }
);

export const axiosFollowUser = createAsyncThunk(
  "user/follow",
  async (idToFollow: string) => {
    const response = await axios.patch(
      `${import.meta.env.VITE_DATABASE_URL}/user/follow/${idToFollow}`,
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
      `${import.meta.env.VITE_DATABASE_URL}/user/unfollow/${idToUnfollow}`,
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

export const axiosCreatePost = createAsyncThunk(
  "post/create",
  async ({ description, files }: CreatePostDto) => {
    const formData = new FormData();
    formData.append("description", description);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      console.log(formData.getAll("files").length);
      const response = await axios.post(
        `${import.meta.env.VITE_DATABASE_URL}/post`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = response.data;
      return data;
    }
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
    presentation: "",
    email: "",
    password: "",
    followers: [],
    follows: [],
    posts: [],
    __v: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state) => {
      state.data = initialState.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosGetUser.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(axiosUpdateUser.fulfilled, (state, action) => {
      state.data = { ...state.data, ...action.payload };
      toast.success("Se actualizo tu informacion");
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
    builder.addCase(axiosCreatePost.fulfilled, () => {
      toast.success("Se publico un nuevo post");
    });
  },
});

export const { deleteUser } = userSlice.actions;
export default userSlice.reducer;
