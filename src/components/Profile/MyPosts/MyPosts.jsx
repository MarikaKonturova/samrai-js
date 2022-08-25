import React from "react";
import { MyPost } from "./MyPost/MyPost";

export const MyPosts = ({ posts, addPost, newPostText, updateNewPostText }) => {
  let newPostElement = React.createRef();
  const addNewPost = () => {
    addPost();
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text)

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
            value={newPostText}
            onChange={onPostChange}
          ></textarea>
          <div>
            <button onClick={addNewPost}> Add post</button>
          </div>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <MyPost message={post.message} key={post.id} likes={post.likes} />
        ))}
      </div>
    </>
  );
};
