import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { AppThunkType, InferActionsTypes } from "./redux-store";
import {
  MessagesSubscribersType,
  MessageType,
  StatusSubscribersType,
  StatusType,
} from "../types/types";
import { chatAPI } from "../api/chat-api";
import { Dispatch } from "redux";

const MESSAGES_RECEIVED = "MESSAGES-RECEIVED";
const SET_STATUS = "SET-STATUS";

let initialState: InitialStateType = {
  messages: [],
  status: "pending",
};

export const chatReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case MESSAGES_RECEIVED:
      let array = [...state.messages, ...action.payload];
      array = array.length > 101 ? array.slice(-1, -100) : array;
      return {
        ...state,
        messages: array,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export const actions = {
  setMessages: (messages: MessageType[]) =>
    ({
      type: MESSAGES_RECEIVED,
      payload: messages,
    } as const),
  setStatus: (status: StatusType) =>
    ({
      type: SET_STATUS,
      payload: status,
    } as const),
};

let _newMessageHandle: ((messages: MessageType[]) => void) | null = null;
const newMessageHandle = (dispatch: Dispatch) => {
  if (_newMessageHandle === null) {
    _newMessageHandle = (messages) => {
      dispatch(actions.setMessages(messages));
    };
  }
  return _newMessageHandle;
};

let _statusChangeHandle: ((status: StatusType) => void) | null = null;
const statusChangeHandle = (dispatch: Dispatch) => {
  if (_statusChangeHandle === null) {
    _statusChangeHandle = (status) => {
      dispatch(actions.setStatus(status));
    };
  }
  return _statusChangeHandle;
};

export const startMessagesListening = (): AppThunkType => async (dispatch) => {
  chatAPI.start();
  chatAPI.subscribe("messages-received", newMessageHandle(dispatch));
  chatAPI.subscribe("status-changed", statusChangeHandle(dispatch));
};
export const stopMessagesListening = (): AppThunkType => async (dispatch) => {
  chatAPI.unsubscribe("messages-received", newMessageHandle(dispatch));
  chatAPI.unsubscribe("status-changed", statusChangeHandle(dispatch));
};
export const sendMessage =
  (message: string): AppThunkType =>
  async (dispatch) =>
    chatAPI.sendMessage(message);

//types
type InitialStateType = {
  messages: MessageType[];
  status: StatusType;
};
type ActionsType = InferActionsTypes<typeof actions>;
