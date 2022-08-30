import React from "react";
import { connect } from "react-redux";
import {
  requestUsers,
  follow,
  unfollow,
  setCurrentPage,
} from "./../../redux/users-reducer";
import { Users } from "./Users";
import { compose } from "redux";
import {
  getUsers,
  getIsFetching,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
} from "../../redux/selectors/userSelectors";
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = async (p) => {
    this.props.requestUsers(p, this.props.pageSize);
  };

  render() {
    return <Users {...this.props} />;
  }
}

const mptp = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mptp, { follow, unfollow, setCurrentPage, requestUsers })
)(UsersContainer);
