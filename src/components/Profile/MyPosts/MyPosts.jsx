import React from "react";
import { MyPost } from "./MyPost/MyPost";
import { reduxForm, Field } from "redux-form";
import { Textarea } from '../../common/FormControls/FormsControls';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
const maxLength30 = maxLengthCreator(30)
const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"New post text"}
          component={Textarea}
          name={"newPostText"}
          validate={[required, maxLength30]}
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};
const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostFormRedux" })(
  AddPostForm
);

const NewPost = (props) => {
  const addNewPost = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = "";
  };

  return (
    <div>
      <AddNewPostFormRedux onSubmit={addNewPost} />
    </div>
  );
};

export const MyPosts = (props) => {
  return (
    <>
      <div>
        <NewPost newPostText={props.newPostText} addPost={props.addPost} />
      </div>
      <div>
        {props.posts.map((post) => (
          <MyPost
            message={post.message}
            key={`post${post.id}`}
            likes={post.likes}
          />
        ))}
      </div>
    </>
  );
};
