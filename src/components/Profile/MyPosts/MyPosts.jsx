import React from "react";
import { MyPost } from "./MyPost/MyPost";


export const MyPosts = (props) => {
  let newPostElement = React.createRef();
  const addNewPost = () => {
    props.addNewPost()
    props.onPostChange('')
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text)
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
          <MyPost message={post.message} key={`post${post.id}`} likes={post.likes} />
        ))}
      </div>
    </>
  );
};
