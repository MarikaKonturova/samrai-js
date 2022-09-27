import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";

class HeaderRequestContainer extends React.Component<HeaderType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = {
  logout: () => void;
};
export type HeaderType = mapStateToPropsType & mapDispatchToPropsType;

export const HeaderContainer = connect(mapStateToProps, { logout })(
  HeaderRequestContainer
);
