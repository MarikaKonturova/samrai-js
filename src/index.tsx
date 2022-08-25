import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost, state, subscribe, updateNewPostText } from "./redux/state";

export let rerenderEntireTree = ( ) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
rerenderEntireTree();
//отдаём renrenderEntireTree в state.js
subscribe(rerenderEntireTree)
