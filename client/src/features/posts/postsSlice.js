import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  posts: [
    {
      id: 1,
      category: "Afropop",
      postMessage: {
        topic: "Unpopular opinion on Afropop Music",
        body: "Unpopular opinion on Afropop Music. npopular opinion on Afropop Music. npopular opinion on Afropop Music. npopular opinion on Afropop Music",
      },
      creationDate: moment().startOf("hour").fromNow(),
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
    addComment: (state, action) => {
      state.posts.map((post) => {
        if (post.id === action.payload.postId) {
          post.comments = [action.payload, ...post.comments];
        }
      });
    },
  },
});

export const { createNewPost, addComment } = postSlice.actions;

export default postSlice.reducer;
