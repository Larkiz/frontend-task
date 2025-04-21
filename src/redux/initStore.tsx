import { postsSlice } from "@/redux/slices/postsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
