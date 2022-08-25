import React from "react";
import { MyPost } from "./MyPost/MyPost";

export const MyPosts = () => {
  const posts = [
    { id: "1", message: "Hi, how are you", likes: 10 },
    { id: "1", message: "Hi, Hi,you", likes: 10 },
    { id: "1", message: "Hi, me", likes: 10 },
  ];
  let newPostElement = React.createRef();
  const addPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  };
  return (
    <>
      <div>
        my posts
        <div>
          <textarea name="" id="" ref={newPostElement}></textarea>
          <div>
            <button onClick={addPost}> Add post</button>
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
