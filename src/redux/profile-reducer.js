export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you", likes: 10 },
    { id: "1", message: "Hi, Hi,you", likes: 10 },
    { id: "1", message: "Hi, me", likes: 10 },
  ],
  newPostText: "",

}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};


export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (newText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText,
  };
};