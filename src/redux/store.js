import {
  profileReducer,
  UPDATE_NEW_POST_TEXT,
  ADD_POST,
} from "./profile-reducer";
import {
  dialogsReducer,
  UPDATE_NEW_MESSAGE_BODY,
  SEND_NEW_MESSAGE,
} from "./dialogs-reducer";
export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi, how are you", likes: 10 },
        { id: "1", message: "Hi, Hi,you", likes: 10 },
        { id: "1", message: "Hi, me", likes: 10 },
      ],
      newPostText: "",
      dialogs: [
        { id: "1", name: "Lena" },
        { id: "2", name: "Pasha" },
        { id: "3", name: "Misha" },
        { id: "4", name: "Kolya" },
        { id: "5", name: "Dima" },
      ],
    },
    messagesPage: {
      newMessageBody: "",
      messages: [
        { id: "1", message: "Good morning" },
        { id: "2", message: "Durling" },
        { id: "3", message: "How are you" },
        { id: "4", message: "Hi" },
        { id: "5", message: "LoliPop" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {},

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._rerenderEntireTree(this._state);
  },
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
export const updateNewMessageBodyActionCreator = (newMessageBody) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody,
  };
};
export const sendNewMessageActionCreator = () => {
  return {
    type: SEND_NEW_MESSAGE,
  };
};

window.store = store;
