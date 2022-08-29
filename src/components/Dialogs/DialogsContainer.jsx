import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendNewMessageActionCreator } from "./../../redux/dialogs-reducer";
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
    onSendMessageClick: (newMessageBody) => {
      dispatch(sendNewMessageActionCreator(newMessageBody));
    },
  };
};

export const DialogsContainer = compose(
  ( withAuthRedirect, connect(mptp, mdtp))(Dialogs)
);
