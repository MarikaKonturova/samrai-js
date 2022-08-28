import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "./../../redux/dialogs-reducer";
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mptp, mdtp)(AuthRedirectComponent);
