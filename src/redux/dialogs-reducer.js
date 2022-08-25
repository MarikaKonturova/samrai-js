export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
export const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessageBody;
      return state;
    case SEND_NEW_MESSAGE:
      state.messages.push({
        id: "6",
        message: state.newMessageBody,
      });
      state.newMessageBody = ''
      return state;
    default:
      return state;
  }
};
