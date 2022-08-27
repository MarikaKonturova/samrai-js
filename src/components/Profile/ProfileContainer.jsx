import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setProfile } from "./../../redux/profile-reducer";
import { setFetching } from "../../redux/users-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    console.log("mounted");
    this.props.setFetching(true);
    console.log(this.props);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.user ?? 2
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
  profile: state.profilePage.profile
})
export default connect(mstp, { setProfile, setFetching })(ProfileContainer);
