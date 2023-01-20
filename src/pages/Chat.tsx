import { FC, useEffect, useRef, useState, UIEvent, memo } from "react";
import { useSelector } from "react-redux";
import { AppRootStateType } from "../redux/redux-store";
import { MessageType, StatusType } from "../types/types";
import { useAppDispatch } from "../utils/hooks/redux-hooks";
import {
  sendMessage,
  startMessagesListening,
  stopMessagesListening,
} from "./../redux/chat-reducer";

type ChatProps = {};
export const Chat: FC<ChatProps> = () => {
  const status = useSelector<AppRootStateType, StatusType>(
    (state) => state.chat.status
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);
  if (status === "error") {
    return <p>Some error Happened. Please, refresh the page</p>;
  }
  return (
    <>
      <Messages />
      <AddMessageForm />
    </>
  );
};

type MessagesType = {};
const Messages: FC<MessagesType> = () => {
  console.log("render MEssages");
  const messages = useSelector<AppRootStateType, MessageType[]>(
    (state) => state.chat.messages
  );
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(false);

  const onActiveMessageScroll = (e: UIEvent<HTMLDivElement>) => {
    let element = e.currentTarget;
    if (
      Math.abs(element.scrollHeight - element.scrollTop) -
        element.clientHeight <
      300
    ) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
      style={{ height: "60vh", overflow: "auto" }}
      onScroll={onActiveMessageScroll}
    >
      {messages.map((m: MessageType, i) => (
        <Message message={m} key={`${m.userName}_${m.message}_${i}`} />
      ))}
      <div
        style={{ float: "left", clear: "both" }}
        ref={messagesAnchorRef}
      ></div>
    </div>
  );
};

type MessagePropsType = {
  message: MessageType;
};
const Message: FC<MessagePropsType> = memo(({ message }) => {
  console.log("rerender");

  return (
    <>
      <div
        key={message.userId}
        style={{ display: "flex", alignItems: "center", gap: "2px" }}
      >
        <img src={message.photo} alt="" width="50" />
        <span>
          <b>{message.userName}</b>:{" "}
        </span>
        <span>{message.message}</span>
      </div>
      <hr />
    </>
  );
});

type AddMessageFormType = {};
const AddMessageForm: FC<AddMessageFormType> = () => {
  const status = useSelector<AppRootStateType, StatusType>(
    (state) => state.chat.status
  );
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState("");

  const onMessageSend = () => {
    if (!message) {
      return;
    }
    dispatch(sendMessage(message));
    setMessage("");
  };

  return (
    <div>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        style={{ display: "block" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={onMessageSend} disabled={status !== "ready"}>
        Send
      </button>
    </div>
  );
};
