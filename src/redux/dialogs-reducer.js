export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

let initialState = {
  newMessageBody: "",
  messages: [
    { id: "1", message: "Good morning" },
    { id: "2", message: "Durling" },
    { id: "3", message: "How are you" },
    { id: "4", message: "Hi" },
    { id: "5", message: "LoliPop" },
  ],
  dialogs: [
    { id: "1", name: "Lena" },
    { id: "2", name: "Pasha" },
    { id: "3", name: "Misha" },
    { id: "4", name: "Kolya" },
    { id: "5", name: "Dima" },
  ],
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessageBody;
      return state;
    case SEND_NEW_MESSAGE:
      state.messages.push({
        id: "6",
        message: state.newMessageBody,
      });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
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
