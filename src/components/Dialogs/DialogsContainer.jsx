import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "./../../redux/dialogs-reducer";
import { compose } from "redux";
const mptp = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
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

export const DialogsContainer = compose(
  (connect(mptp, mdtp), withAuthRedirect)(Dialogs)
);
