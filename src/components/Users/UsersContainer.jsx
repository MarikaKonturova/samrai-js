import React from "react";
import { connect } from "react-redux";

import { setUsers, follow, unfollow, setCurrentPage, setFetching } from "./../../redux/users-reducer";
import axios from "axios";
import { Users } from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setFetching(true);

    console.log(this.props);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setFetching(false);
      });
  }

  onPageChanged = async (p) => {
    this.props.setFetching(true);

    console.log(p);
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setFetching(false);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
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
