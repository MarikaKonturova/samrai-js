import { FC, useEffect, useState } from "react";

type ChatProps = {};
export const Chat: FC<ChatProps> = () => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    let ws: WebSocket;
    const closeHandle = () => {
      setTimeout(createChannel, 3000);
    };
    function createChannel() {
      ws?.removeEventListener("close", closeHandle);
      ws?.close();

      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws?.addEventListener("close", closeHandle);
      setWs(ws);
    }
    createChannel();

    return () => {
      ws.removeEventListener("close", closeHandle);
      ws.close();
    };
  }, []);
  return (
    <div>
      <Messages ws={ws} />
      <AddMessageForm ws={ws} />
    </div>
  );
};

type MessagesType = {
  ws: WebSocket | null;
};
const Messages: FC<MessagesType> = ({ ws }) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  useEffect(() => {
    const messageHandle = (e: MessageEvent) => {
      setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
    };
    ws?.addEventListener("message", messageHandle);
    return () => {
      ws?.removeEventListener("message", messageHandle);
    };
  }, [ws]);

  return (
    <div style={{ height: "60vh", overflow: "auto" }}>
      {messages.map((m: any) => (
        <Message message={m} />
      ))}
    </div>
  );
};

type MessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
type MessagePropsType = {
  message: MessageType;
};
const Message: FC<MessagePropsType> = ({ message }) => {
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
};

type AddMessageFormType = {
  ws: WebSocket | null;
};
const AddMessageForm: FC<AddMessageFormType> = ({ ws }) => {
  const [message, setMessage] = useState("");
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">(
    "pending"
  );
  const sendMessage = () => {
    if (!message) {
      return;
    }
    ws?.send(message);
    setMessage("");
  };
  useEffect(() => {
    const openHandle = () => {
      setReadyStatus("ready");
    };
    ws?.addEventListener("open", openHandle);
    return () => {
      ws?.removeEventListener("open", openHandle);
    };
  }, [ws]);
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
      <button
        onClick={sendMessage}
        disabled={ws !== null && readyStatus !== "ready"}
      >
        Send
      </button>
    </div>
  );
};
