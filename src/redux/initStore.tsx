import { postsSlice } from "@/redux/slices/postsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

// Типы для работы с хранилищем
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
