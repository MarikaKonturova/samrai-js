import React from "react";
import { MyPost } from "./MyPost/MyPost";

export const MyPosts = () => {
  let myPostsData = [
    {id: '1', message: 'Hi, how are you', likes: 10},
    {id: '1', message: 'Hi, Hi,you', likes: 10},
    {id: '1', message: 'Hi, me', likes: 10},
  ]
  return (
    <>
      <div>
        my posts
        <div>
          <textarea name="" id=""></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div>
      {myPostsData.map(post=> <MyPost message={post.message} key={ post.id} likes={post.likes}/>)}
    
      </div>
    </>
  );
};
