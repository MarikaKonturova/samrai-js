import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "./../../redux/dialogs-reducer";

const mptp = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
  };
};
const mdtp = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendNewMessageActionCreator());
    },
    onSendMessageChange: (body) => {
      dispatch(updateNewMessageBodyActionCreator(body));
    },
  };
};

export const DialogsContainer = connect(mptp, mdtp)(Dialogs);
