import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { usersReducer } from "./users-reducer";
import thunkMiddleware from "redux-thunk"

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
})

let store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
