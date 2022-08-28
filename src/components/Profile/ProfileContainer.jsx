import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {getUserProfile} from '../../redux/profile-reducer'


class ProfileContainer extends React.Component {
  componentDidMount() {
   //userId потому что URI parameters
    let {userId} = this.props.params
    console.log (userId)
        this.props.getUserProfile(userId)
  }
  render() {
    return <Profile {...this.props} />;
  }
}
const mstp = (state) => ({
  profile: state.profilePage.profile,
});
//propsType Params

const WithUrlDataContainerComponent = (props) => {
  return <ProfileContainer {...props} params={useParams()} />;
};

export default connect(mstp, { getUserProfile })(
  WithUrlDataContainerComponent
);
