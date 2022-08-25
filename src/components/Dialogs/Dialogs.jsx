import React from "react";
import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";
import { updateNewMessageBodyActionCreator } from "../../redux/store";
import { sendNewMessageActionCreator } from "./../../redux/store";

const DialogItem = ({ name, id }) => (
  <Link to={id} className={s.dialogs_item}>
    {name}
  </Link>
);

const Message = ({ message }) => <div className={s.message}>{message}</div>;

export const Dialogs = (props) => {
  const onSendMessageClick = () => {
    props.dispatch(sendNewMessageActionCreator());
  };
  const onSendMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {props.dialogs.map((dialog) => (
          <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messages.map((message) => (
          <Message message={message.message} key={message.id} />
        ))}
        <div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={onSendMessageChange}
              value={props.newMessageBody}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};
