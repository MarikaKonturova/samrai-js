import { usersAPI } from "../api/api";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SET_FETCHING = "SET_FETCHING";
export const SET_PROGRESS_FETCHING = "SET_PROGRESS_FETCHING";
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  inFollowingProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: true } : u
        ),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? { ...u, followed: false } : u
        ),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case SET_FETCHING:
      return { ...state, isFetching: action.fetching };
    case SET_PROGRESS_FETCHING:
      return {
        ...state,
        inFollowingProgress: action.inFollowingProgress
          ? [...state.inFollowingProgress, action.userId]
          : state.inFollowingProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};
/* 
export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setFetchingAC = (fetching) => ({ type: SET_FETCHING, fetching }); */
export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalCount = (totalUsersCount) => {
  return {
  type: SET_TOTAL_COUNT,
  totalUsersCount,
}
}
  ;
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setFetching = (fetching) => ({ type: SET_FETCHING, fetching });
export const setFollowingFetching = (inFollowingProgress, userId) => ({
  type: SET_PROGRESS_FETCHING,
  inFollowingProgress,
  userId,
});

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(currentPage));
  dispatch(setFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalCount(data.totalCount));
    dispatch(setFetching(false));
  
  });
};
export const follow = (userId) => (dispatch) => {
  dispatch(setFollowingFetching(true, userId));
  usersAPI
    .follow(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
    })
    .finally(() => {
      dispatch(setFollowingFetching(false, userId));
    });
};
export const unfollow = (userId) => (dispatch) => {
  dispatch(setFollowingFetching(true, userId));
  usersAPI
    .unfollow(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
    })
    .finally(() => {
      dispatch(setFollowingFetching(false, userId));
    });
};
