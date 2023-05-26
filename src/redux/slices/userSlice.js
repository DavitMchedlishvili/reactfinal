import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const authetnicateUser = createAsyncThunk(
  "user/authenticateUser",

  async ({ formValues, isLogin }, { rejectWithValue }) => {
    try {
      const route = `/users/${isLogin ? "login" : "register"}`;
      const { data } = await axiosInstance.post(route, formValues);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log("data", data);
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.userData = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },

  extraReducers: (builder) => {
    builder.addCase(authetnicateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authetnicateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
      state.error = null;
    });
    builder.addCase(authetnicateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
