import React from "react";
import { Dialogs } from "./Dialogs";
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "./../../redux/dialogs-reducer";

export const DialogsContainer = (props) => {
  let state = props.store.getState();
  const onSendMessageClick = () => {
    props.store.dispatch(sendNewMessageActionCreator());
  };
  const onSendMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(body));
  };

  return (
    <Dialogs
      onSendMessageClick={onSendMessageClick}
      onSendMessageChange={onSendMessageChange}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageBody={state.dialogsPage.newMessageBody}
    />
  );
};
