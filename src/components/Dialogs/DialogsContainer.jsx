import React from "react";
import { Dialogs } from "./Dialogs";
import {
  sendNewMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "./../../redux/dialogs-reducer";
import StoreContext from "../../redux/StoreContext";

export const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const onSendMessageClick = () => {
         store.dispatch(sendNewMessageActionCreator());
        };
        const onSendMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyActionCreator(body));
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
      }}
    </StoreContext.Consumer>
  );
};
