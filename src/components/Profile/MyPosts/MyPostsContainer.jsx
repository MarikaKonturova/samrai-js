import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "./../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = (props) => {
  let state = props.store.getState()
  const addNewPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  return <MyPosts onPostChange={onPostChange} addNewPost={addNewPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />;
};
 