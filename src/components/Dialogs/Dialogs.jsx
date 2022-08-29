import React from "react";
import s from "./Dialogs.module.css";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
const DialogItem = ({ name, id }) => (
  <Link to={id} className={s.dialogs_item}>
    {name}
  </Link>
);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"New Message"}
          component={"textarea"}
          name={"newMessageBody"}
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};
//нужно обязательно оборачивать в reduxForm store.getState().from
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

const Message = ({ message }) => <div className={s.message}>{message}</div>;

export const Dialogs = (props) => {
  const addNewMessage = (values) => {
    props.onSendMessageClick(values.newMessageBody);
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
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
