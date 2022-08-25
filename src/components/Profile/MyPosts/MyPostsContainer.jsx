import StoreContext from "../../../redux/StoreContext";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "./../../../redux/profile-reducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const addNewPost = () => {
          store.dispatch(addPostActionCreator());
        };
        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        return (
          <MyPosts
            onPostChange={onPostChange}
            addNewPost={addNewPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
