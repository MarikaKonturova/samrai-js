import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { Preloader } from "./components/common/Preloader/Preloader";
class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path={"/"} element={<Navigate to="/profile" />} />
            <Route path={"/profile"}>
              <Route index element={<ProfileContainer />} />
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const mapDispatchToProps = (dispatch) => ({
  initializeApp: () => {
    dispatch(initializeApp());
  },
});
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);