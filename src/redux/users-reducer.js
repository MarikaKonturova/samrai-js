export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: "1",
      followed: false,
      fullName: "Dmitry",
      status: "bla bla",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    }, {
      id: "2",
      followed: false,
      fullName: "Dmitry",
      status: "bla bla",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    }, {
      id: "3",
      followed: false,
      fullName: "Dmitry",
      status: "bla bla",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    }, {
      id: "4",
      followed: false,
      fullName: "Dmitry",
      status: "bla bla",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    }, {
      id: "5",
      followed: false,
      fullName: "Dmitry",
      status: "bla bla",
      location: {
        city: "Minsk",
        country: "Belarus",
      },
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
