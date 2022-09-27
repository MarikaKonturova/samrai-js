import React, { FC } from "react";
import { MyPost } from "./MyPost/MyPost";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Textarea } from "../../common/FormControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { MyPostsType } from "./MyPostsContainer";
const maxLength30 = maxLengthCreator(30);
type AddPostFormType = {};
const AddPostForm: FC<
  InjectedFormProps<{ newPostText: string }, AddPostFormType> & AddPostFormType
> = (props) => {
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
const AddNewPostFormRedux = reduxForm<{ newPostText: string }>({
  form: "ProfileAddNewPostFormRedux",
})(AddPostForm);

const NewPost = (props: { addPost: (value: string) => void }) => {
  const addNewPost = (values: { newPostText: string }) => {
    props.addPost(values.newPostText);
    values.newPostText = "";
  };

  return (
    <div>
      <AddNewPostFormRedux onSubmit={addNewPost} />
    </div>
  );
};

export const MyPosts: FC<MyPostsType> = React.memo((props) => {
  return (
    <>
      <div>
        <NewPost addPost={props.addPost} />
      </div>
      <div>
        {[...props.posts].reverse().map((post) => (
          <MyPost
            message={post.message}
            key={`post${post.id}`}
            likes={post.likes}
          />
        ))}
      </div>
    </>
  );
});
