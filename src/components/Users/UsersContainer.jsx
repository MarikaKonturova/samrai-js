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
  getInFollowingProgress,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
} from "../../redux/selectors/userSelectors";
import { Preloader } from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
  
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {requestUsers, pageSize} = this.props
    requestUsers(pageNumber, pageSize)
}

  render() {
    return<>
      {this.props.isFetching ? <Preloader/> :<Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      users={this.props.users}
      onPageChanged={this.onPageChanged}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      inFollowingProgress={this.props.inFollowingProgress}
      />}

    </>
    
    
   

  }
}

const mptp = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    inFollowingProgress: getInFollowingProgress(state),
  };
};

export default compose(
  connect(mptp, { follow, unfollow, setCurrentPage, requestUsers })
)(UsersContainer);
