import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  updateStatus,
} from "../../redux/profile-reducer";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    //userId потому что URI parameters
    let { userId } = this.props.params;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mstp = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
});

const WithUrlDataContainerComponent = (Component) => {
  function ComponentWithParams(props) {
    return <Component {...props} params={useParams()} />;
  }
  return ComponentWithParams;
};

export default compose(
  connect(mstp, { getUserProfile, updateStatus, getStatus }),
  WithUrlDataContainerComponent
)(ProfileContainer);
