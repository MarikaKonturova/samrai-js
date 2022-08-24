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
  let dialogsData = [
    { id: "1", name: "Lena" },
    { id: "2", name: "Pasha" },
    { id: "3", name: "Misha" },
    { id: "4", name: "Kolya" },
    { id: "5", name: "Dima" },
  ];
  let messagesData = [
    { id: "1", message: "Good morning" },
    { id: "2", message: "Durling" },
    { id: "3", message: "How are you" },
    { id: "4", message: "Hi" },
    { id: "5", message: "LoliPop" },
  ];
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
