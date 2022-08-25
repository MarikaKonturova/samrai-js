import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";

function App({state, addPost, updateNewPostText}: any) {
  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Profile posts={state.profilePage.posts} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>} />
          <Route path="/dialogs" element={<Dialogs  dialogs={state.profilePage.dialogs} messages={state.messagesPage.messages} />} />
        </Routes>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
