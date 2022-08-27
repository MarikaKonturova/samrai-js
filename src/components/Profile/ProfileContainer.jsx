import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "./../../redux/profile-reducer";
import { setFetching } from "../../redux/users-reducer";
import { useParams } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
   
    this.props.setFetching(true);
    console.log(this.props);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.params.userId ?? 2
        }`
      )
      .then((response) => {
        this.props.setProfile(response.data);
        this.props.setFetching(false);
      });
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

export default connect(mstp, { setProfile, setFetching })(
  WithUrlDataContainerComponent
);
