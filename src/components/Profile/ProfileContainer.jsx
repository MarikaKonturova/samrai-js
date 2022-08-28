import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { Navigate,useParams } from "react-router-dom";
import {getUserProfile} from '../../redux/profile-reducer'


class ProfileContainer extends React.Component {
  componentDidMount() {
   //userId потому что URI parameters
    let {userId} = this.props.params
    console.log (userId)
        this.props.getUserProfile(userId)
  }
  render() {
    if (!this.props.isAuth) return <Navigate to="/login"/>
    return <Profile {...this.props} />;
  }
}
const mstp = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});
//propsType Params

const WithUrlDataContainerComponent = (props) => {
  return <ProfileContainer {...props} params={useParams()} />;
};

export default connect(mstp, { getUserProfile })(
  WithUrlDataContainerComponent
);
