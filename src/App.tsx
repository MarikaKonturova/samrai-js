import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

function App(props: any) {
  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText} dispatch={props.dispatch}/>}/>
          <Route path="/dialogs" element={<Dialogs  dialogs={props.state.profilePage.dialogs} messages={props.state.messagesPage.messages} />} />
        </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
