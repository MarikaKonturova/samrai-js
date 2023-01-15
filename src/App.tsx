import React from "react";
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
import ProfileContainer from "./components/Profile/ProfileContainer";
import { AppDispatch, AppRootStateType } from "./redux/redux-store";
import { Chat } from "./pages/Chat";
type AppType = {
  initializeApp: () => void;
  initialized: boolean;
};
class App extends React.Component<AppType> {
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
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
        {/* </React.Suspense> */}
      </div>
    );
  }
}

const mapStateToProps = (state: AppRootStateType) => ({
  initialized: state.app.initialized,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  initializeApp: () => {
    dispatch(initializeApp());
  },
});
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
