import { authAPI } from "../api/api";
const SET_USER_DARE = "SET_USER_DARE";

let initialState = {
  id: "",
  email: "",
  login: "",
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DARE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserDate = (userId, email, login, isAuth) => ({
  type: SET_USER_DARE,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserDate = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserDate(id, email, login, true));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0)
      dispatch(setAuthUserDate(null, null, null, false));
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserDate());
    }
  });
};
