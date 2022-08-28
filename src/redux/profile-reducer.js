import {profileAPI} from "../api/api";
export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = 'SET_STATUS'
let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likes: 10 },
    { id: 2, message: "Hi, Hi,you", likes: 10 },
    { id: 3, message: "Hi, me", likes: 10 },
  ],
  newPostText: "",
  profile: null,
  status: ''
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: ''
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
    }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
    }
    case SET_STATUS:
      return {...state, status: action.status}
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

export const setProfile = (profile)=>({type: SET_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
        .then(response => {

            dispatch(setProfile(response.data))
        })
} 

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getState(userId)
      .then(response => {
          dispatch(setStatus(response.data))
      })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
      .then(response => {
          if (response.data.resultCode === 0) {
              dispatch(setStatus(status))
          }
      })
} 