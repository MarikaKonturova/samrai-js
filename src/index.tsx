import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {store} from './redux/store'
export let rerenderEntireTree = ( state: any) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
rerenderEntireTree(store.getState());
//отдаём renrenderEntireTree в state.js
store.subscribe(rerenderEntireTree)
