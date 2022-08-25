import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

function App(props: any) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
