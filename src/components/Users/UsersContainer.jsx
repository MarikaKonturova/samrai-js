import React from "react";
import { connect } from "react-redux";

import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setFetching,
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
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        users={this.props.users}
        isFetching={this.props.isFetching}
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
})(UsersContainer);
