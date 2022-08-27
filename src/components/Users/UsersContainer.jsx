import React from "react";
import { connect } from "react-redux";
import  Users  from "./Users";
import { followAC, setCurrentPageAC, unfollowAC } from "../../redux/users-reducer";
import { setUsersAC } from "./../../redux/users-reducer";
const mptp = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
     setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
  };
};

export const UsersContainer = connect(mptp, mdtp)(Users);
