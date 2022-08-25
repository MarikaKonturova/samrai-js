const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.newMessageBody;
      this._rerenderEntireTree(this._state);
    } else if (action.type === SEND_NEW_MESSAGE) {
      console.log(this._state.messagesPage.newMessageBody);
      this._state.messagesPage.messages.push({
        id: "6",
        message: this._state.messagesPage.newMessageBody,
      });
      this._rerenderEntireTree(this._state);
    }
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
