import React from "react";
import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";

const DialogItem = ({ name, id }) => (
  <Link to={id} className={s.dialogs_item}>
    {name}
  </Link>
);

const Message = ({ message }) => <div className={s.message}>{message}</div>;

export const Dialogs = () => {
 
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsData.map((dialog) => (
          <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>
        ))}
      </div>
      <div className={s.messages}>
        {messagesData.map((message) => (
          <Message message={message.message} key={message.id} />
        ))}
      </div>
    </div>
  );
};
