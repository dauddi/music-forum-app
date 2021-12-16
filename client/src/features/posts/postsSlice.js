import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      category: "Afropop",
      postMessage: {
        topic: "Unpopular opinion on Afropop Music",
        body: "Unpopular opinion on Afropop Music. npopular opinion on Afropop Music. npopular opinion on Afropop Music. npopular opinion on Afropop Music",
      },
      creationDate: 345266525,
      owner: {
        id: 987,
        name: "Ashley Janelle",
        image: "https://avatars.githubusercontent.com/u/3905913?v=4",
      },
      comments: [],
      votes: {
        upvotes: 0,
        downvotes: 0,
      },
    },
  ],
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createNewPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    update: (state, action) => {
      state = state;
    },
  },
});

export const { createNewPost, update } = postSlice.actions;

export default postSlice.reducer;
