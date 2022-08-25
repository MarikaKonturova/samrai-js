import { combineReducers, legacy_createStore } from "redux";
import { profileReducer } from './profile-reducer';
import { dialogsReducer } from './dialogs-reducer';

let reducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer
})

let store = legacy_createStore(reducer);
window.store = store;

export default store;
