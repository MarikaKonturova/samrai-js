import React from "react";
import { connect } from "react-redux";
import  Users  from "./Users";
import { followAC, unfollowAC } from "../../redux/users-reducer";
import { setUsersAC } from "./../../redux/users-reducer";
const mptp = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mdtp = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

export const UsersContainer = connect(mptp, mdtp)(Users);
