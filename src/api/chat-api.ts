import {
  MessageType,
  StatusSubscribersType,
  MessagesSubscribersType,
  StatusType,
} from "../types/types";

type EventsNamesType = "messages-received" | "status-changed";

let subscribers = {
  "messages-received": [] as MessagesSubscribersType[],
  "status-changed": [] as StatusSubscribersType[],
} satisfies Record<
  EventsNamesType,
  MessagesSubscribersType[] | StatusSubscribersType[]
>;
let ws: WebSocket | null = null;

const closeHandle = () => {
  statusHandle("pending");
  setTimeout(createChannel, 3000);
};
const openHandle = () => {
  statusHandle("ready");
};
const errorHandle = () => {
  statusHandle("error");
  console.log("RESTART PAGE");
};
const messageHandle = (e: MessageEvent) => {
  let newMessages = JSON.parse(e.data);
  subscribers["messages-received"].forEach((s) => s(newMessages));
};

const statusHandle = (status: StatusType) => {
  subscribers["status-changed"].forEach((s) => s(status));
};
const cleanUp = () => {
  ws?.removeEventListener("close", closeHandle);
  ws?.removeEventListener("message", messageHandle);
  ws?.removeEventListener("open", openHandle);
  ws?.removeEventListener("error", errorHandle);
};
function createChannel() {
  cleanUp();
  ws?.close();

  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  statusHandle("pending");
  ws?.addEventListener("close", closeHandle);
  ws?.addEventListener("message", messageHandle);
  ws?.addEventListener("open", openHandle);
  ws?.addEventListener("error", errorHandle);
}

export const chatAPI = {
  start() {
    createChannel();
  },
  close() {
    subscribers["messages-received"] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesSubscribersType | StatusSubscribersType
  ) {
    if (eventName === "messages-received") {
      subscribers[eventName].push(callback as MessagesSubscribersType);
    }
    if (eventName === "status-changed") {
      subscribers[eventName].push(callback as StatusSubscribersType);
    }
    return () => {
      if (eventName === "messages-received") {
        subscribers[eventName] = subscribers[eventName].filter(
          (s) => s !== callback
        );
      }
      if (eventName === "status-changed") {
        subscribers[eventName] = subscribers[eventName].filter(
          (s) => s !== callback
        );
      }
    };
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesSubscribersType | StatusSubscribersType
  ) {
    if (eventName === "messages-received") {
      subscribers[eventName] = subscribers[eventName].filter(
        (s) => s !== callback
      );
    }
    if (eventName === "status-changed") {
      subscribers[eventName] = subscribers[eventName].filter(
        (s) => s !== callback
      );
    }
  },
  sendMessage(message: string) {
    ws?.send(message);
  },
};
