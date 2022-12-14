import { Profile } from "./Profile";
import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Params, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {
  getStatus,
  getUserProfile,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { AppRootStateType } from "../../redux/redux-store";
import { ProfileType } from "../../types/types";
class ProfileContainer extends React.Component<ComponentWithRouterType> {
  constructor(props: ComponentWithRouterType) {
    super(props as ComponentWithRouterType);
  }
  refreshProfile() {
    let { userId } = this.props.params;
    if (!userId) {
      userId = this.props.authorizedUserId
        ? this.props.authorizedUserId?.toString()
        : undefined;
    }
    if (userId) {
      this.props.getUserProfile(+userId);
      this.props.getStatus(+userId);
    }
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(
    prevProps: ComponentWithRouterType,
    prevState: ComponentWithRouterType
  ) {
    if (prevProps.params.userId !== this.props.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    //другое условие, чтобы не вмешиваться в componentDidMount с history
    if (!this.props.isAuth && !this.props.params.hasOwnProperty("userId")) {
      return <Navigate to={"/login"} />;
    }
    return <Profile isOwner={!this.props.params.userId} {...this.props} />;
  }
}
const mstp = (state: AppRootStateType) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  status: state.profilePage.status,
});


function withRouter(Component: ComponentType<ComponentWithRouterType>) {
  function ComponentWithParams(props: ComponentWithParamsType) {
    return <Component {...props} params={useParams()} />;
  }

  return ComponentWithParams;
}

export default compose<React.ComponentType>(
  connect(mstp, {
    getUserProfile,
    updateStatus,
    getStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer);

//types

type MapStateToPropsType = ReturnType<typeof mstp>;
type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile:  Omit<ProfileType, 'userId'| 'photos'> ) => Promise<any>;
};

export type ComponentWithParamsType = MapStateToPropsType &
  MapDispatchToPropsType;
export type ComponentWithRouterType = ComponentWithParamsType & {
  params: Params;
};
