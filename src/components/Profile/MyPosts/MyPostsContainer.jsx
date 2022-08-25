import { MyPosts } from "./MyPosts";
import { connect } from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
const mapStateToProps = (state) => {

  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return ({
    addNewPost: () => {
      dispatch(addPostActionCreator()); 
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  })
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
  