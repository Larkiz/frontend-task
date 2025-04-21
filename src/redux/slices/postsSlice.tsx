import { PostType, Posts, RatingActions } from "@/types/posts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initState = {
  posts: Posts;
  searchFilter: string;
  post: PostType;
};

const initialState: initState = {
  posts: [],
  searchFilter: "",
  post: {
    userId: 0,
    id: 0,
    title: "",
    body: "",
    likes: 0,
    dislikes: 0,
    ratingStatus: "nothing",
  },
};

const randomNum = () => Math.floor(Math.random() * 51);

const ratingActions: RatingActions = {
  like: {
    like: (post: PostType) => {
      post.likes -= 1;
      post.ratingStatus = "nothing";
      return post;
    },
    dislike: (post: PostType) => {
      post.likes += 1;
      post.dislikes -= 1;
      post.ratingStatus = "like";
      return post;
    },
    nothing: (post: PostType) => {
      post.ratingStatus = "like";
      post.likes += 1;
      return post;
    },
  },
  dislike: {
    like: (post: PostType) => {
      post.ratingStatus = "dislike";
      post.likes -= 1;
      post.dislikes += 1;
      return post;
    },
    dislike: (post: PostType) => {
      post.ratingStatus = "nothing";
      post.dislikes -= 1;
      return post;
    },
    nothing: (post: PostType) => {
      post.ratingStatus = "dislike";
      post.dislikes += 1;
      return post;
    },
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: initState, action: PayloadAction<Posts>) => {
      let data: Posts = [];
      if (!state.posts.length) {
        data = action.payload.map((post) => {
          return {
            ...post,
            likes: randomNum(),
            dislikes: randomNum(),
            ratingStatus: "nothing",
          };
        });
      } else {
        for (let i = 0; i < action.payload.length; i++) {
          const newPost = action.payload[i];

          for (let j = 0; j < state.posts.length; j++) {
            const prevPost = state.posts[j];

            if (prevPost.id === newPost.id) {
              action.payload[i] = { ...prevPost, ...newPost };
            }
          }
        }
        data = action.payload;
      }
      state.posts = data;
    },
    likePost: (state: initState, action: PayloadAction<number>) => {
      const id = action.payload;
      // для корректной работы на странице конкретного поста
      state.post = ratingActions["like"][state.post.ratingStatus](state.post);

      // Для работы на все приложение
      state.posts = state.posts.map((post) => {
        if (post.id === id) {
          post = ratingActions["like"][post.ratingStatus](post);
        }
        return post;
      });
    },
    dislikePost: (state: initState, action: PayloadAction<number>) => {
      const id = action.payload;
      // для корректной работы на странице конкретного поста
      state.post = ratingActions["dislike"][state.post.ratingStatus](
        state.post
      );

      // Для работы на все приложение
      state.posts = state.posts.map((post) => {
        if (post.id === id) {
          post = ratingActions["dislike"][post.ratingStatus](post);
        }
        return post;
      });
    },
    changeSearchFilter: (state: initState, action: PayloadAction<string>) => {
      const text = action.payload;

      state.searchFilter = text;
    },
    setPost: (state: initState, action: PayloadAction<PostType>) => {
      const data = action.payload;
      const postFromAll = state.posts.find((post) => post.id === data.id);

      state.post = { ...data, ...postFromAll };
    },
    clearPost: (state: initState) => {
      state.post = {
        userId: 0,
        id: 0,
        title: "",
        body: "",
        likes: 0,
        dislikes: 0,
        ratingStatus: "nothing",
      };
    },
  },
});

export const {
  setPosts,
  likePost,
  dislikePost,
  changeSearchFilter,
  setPost,
  clearPost,
} = postsSlice.actions;
