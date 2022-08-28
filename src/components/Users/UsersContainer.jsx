import React from "react";
import { connect } from "react-redux";
import {
  getUsers,
  follow,
  unfollow,
  setCurrentPage,
} from "./../../redux/users-reducer";
import { Users } from "./Users";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = async (p) => {
    this.props.getUsers(p, this.props.pageSize);
  };

  render() {
    return <Users {...this.props} />;
  }
}

const mptp = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    inFollowingProgress: state.usersPage.inFollowingProgress,
  };
};

export default withAuthRedirect(connect(mptp, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
})(UsersContainer));
