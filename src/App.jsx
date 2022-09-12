import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { Preloader } from "./components/common/Preloader/Preloader";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import  ProfileContainer  from "./components/Profile/ProfileContainer";
/*const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
 const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
); */

class App extends React.Component {
  componentDidMount() {
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

      {/*   <React.Suspense fallback={<Preloader />}> */}
          <div className="app-wrapper-content">
            <Routes>
              <Route path={"/"} element={<Navigate to="/profile" />} />
              <Route path={"/profile"}>
                <Route index element={<ProfileContainer />} />
                <Route
                  path=":userId"
                  element={
                      <ProfileContainer />
                  }
                />
              </Route>
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        {/* </React.Suspense> */}
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
