import { profileAPI } from "../api/api";
import { v1 } from "uuid";
import { authReducer } from "./auth-reducer";
import { stopSubmit } from "redux-form";
export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: v1(), message: "Hi, how are you", likes: 10 },
    { id: v1(), message: "Hi, Hi,you", likes: 10 },
    { id: v1(), message: "Hi, me", likes: 10 },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: v1(),
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_PHOTO:
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
export const setProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos });

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const savePhoto = (photo) => (dispatch) => {
  profileAPI.savePhoto(photo).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setPhoto(response.data.data.photos));
    }
  });
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const oldProfile = getState().profilePage.profile;
  console.log(profile);
  const newProfile = { ...oldProfile, ...profile };
  const response = await profileAPI.saveProfile(newProfile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0])
  }
};
export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});
