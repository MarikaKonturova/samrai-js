import { v1 } from "uuid";

export const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";
let initialState = {
  messages: [
    { id: v1(), message: "Good morning" },
    { id: v1(), message: "Durling" },
    { id: v1(), message: "How are you" },
    { id: v1(), message: "Hi" },
    { id: v1(), message: "LoliPop" },
  ],
  dialogs: [
    { id: v1(), name: "Lena" },
    { id: v1(), name: "Pasha" },
    { id: v1(), name: "Misha" },
    { id: v1(), name: "Kolya" },
    { id: v1(), name: "Dima" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      let newMessage = { id: v1(), message: action.newMessageBody };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export const sendNewMessageActionCreator = (newMessageBody) => {
  return {
    type: SEND_NEW_MESSAGE,
    newMessageBody,
  };
};
