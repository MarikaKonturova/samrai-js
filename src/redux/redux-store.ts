import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { ProfileActionsType, profileReducer } from './profile-reducer';
import { DialogsActionsType, dialogsReducer } from './dialogs-reducer';
import { UsersActionsType, usersReducer } from "./users-reducer";
import  thunkMiddleware, { ThunkAction, ThunkDispatch,  } from "redux-thunk"
import { AuthActionsType, authReducer } from './auth-reducer';
import { appReducer } from "./app-reducer";
import { reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
})
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store;
//type ReducerActionsType = ProfileActionsType | AuthActionsType | UsersActionsType | DialogsActionsType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, any>
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, any>
export default store