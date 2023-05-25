import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
