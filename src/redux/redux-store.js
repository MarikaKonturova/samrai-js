import {applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { usersReducer } from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import { authReducer } from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})


let store = legacy_createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
