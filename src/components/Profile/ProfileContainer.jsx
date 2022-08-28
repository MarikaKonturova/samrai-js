import { Profile } from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {getUserProfile} from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux'
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
  isAuth: state.auth.isAuth
});

const WithUrlDataContainerComponent = (Component) => {
  function ComponentWithParams(props){
    return <Component {...props} params={useParams()} />;
  }
  return ComponentWithParams
};

export default compose(connect(mstp, { getUserProfile }), WithUrlDataContainerComponent, withAuthRedirect)(ProfileContainer)