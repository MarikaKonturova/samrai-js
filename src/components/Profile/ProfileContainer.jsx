import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let { userId } = this.props.params;
    if (!userId) {
      userId = this.props.authorizedUserId
  }
if(userId){
  this.props.getUserProfile(userId);
  this.props.getStatus(userId);
}
   
  }

  render() {
    //другое условие, чтобы не вмешиваться в componentDidMount с history
    if (!this.props.isAuth && !this.props.params.hasOwnProperty('userId')) {
      return <Navigate to={"/login"} />;
    }
    return <Profile {...this.props} />;
  }
}
const mstp = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  status: state.profilePage.status,
});

export const WithUrlDataContainerComponent = (Component) => {
  function ComponentWithParams(props) {
    return <Component {...props} params={useParams()} />;
  }
  return ComponentWithParams;
};

export default compose(
  connect(mstp, { getUserProfile, updateStatus, getStatus }),
  WithUrlDataContainerComponent
)(ProfileContainer);
