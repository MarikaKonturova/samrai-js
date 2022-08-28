import React from "react";
import { connect } from "react-redux";

import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setFetching,
  setFollowingFetching
} from "./../../redux/users-reducer";
import { Users } from "./Users";
import { usersAPI } from "./../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);


    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setFetching(false);
      });
  }

  onPageChanged = async (p) => {
    this.props.setFetching(true);

    console.log(p);
    this.props.setCurrentPage(p);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setFetching(false);
      });
  };

  render() {
    return (
      <Users
       {...this.props}
      />
    );
  }
}

const mptp = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    inFollowingProgress: state.usersPage.inFollowingProgress
  };
};

/* export default connect(mptp, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setFetching: setFetchingAC,
})(UsersContainer); */
export default connect(mptp, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setFetching,
  setFollowingFetching
})(UsersContainer);
