import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import {getAuthUserDate} from "../../redux/authReduser";
class HeaderRequestContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserDate()
  }

  render() {
    return (
      <Header
      {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export const HeaderContainer = connect(mapStateToProps, { getAuthUserDate })(
  HeaderRequestContainer
);
