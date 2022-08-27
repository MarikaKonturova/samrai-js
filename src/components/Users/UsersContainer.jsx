import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, unfollowAC } from "../../redux/users-reducer";
import { setUsersAC } from "./../../redux/users-reducer";
import axios from "axios";
import { Users } from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log(this.props)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = async(p) => {
    console.log(p)
    this.props.setCurrentPage(p);
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
 

    return (
      <Users totalUsersCount={this.props.totalUsersCount}
       pageSize={this.props.pageSize} 
       onPageChanged={this.onPageChanged}
       unfollow={this.props.unfollow}
       follow={this.props.follow}
       users={this.props.users}
       />
    );
  } 
}

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

export default connect(mptp, mdtp)(UsersContainer);
