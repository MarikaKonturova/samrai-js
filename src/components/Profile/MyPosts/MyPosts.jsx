import React from "react";
import { MyPost } from "./MyPost/MyPost";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/store'


export const MyPosts = (props) => {
  let newPostElement = React.createRef();
  const addNewPost = () => {
    props.dispatch(addPostActionCreator());
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(
      updateNewPostTextActionCreator( text)
    );
  };
  return (
    <>
      <div>
        my posts
        <div>
          <textarea
            name=""
            id=""
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
          <div>
            <button onClick={addNewPost}> Add post</button>
          </div>
        </div>
      </div>
      <div>
        {props.posts.map((post) => (
          <MyPost message={post.message} key={post.id} likes={post.likes} />
        ))}
      </div>
    </>
  );
};
