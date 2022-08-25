import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
export let rerenderEntireTree = (state: any) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
rerenderEntireTree(store.getState());
//отдаём renrenderEntireTree в state.js

store.subscribe(() => {
  //чтобы не терять this, "привязываем state" store.subscribe(rerenderEntireTree) = теряется this
  let state = store.getState();
  rerenderEntireTree(state);
});

//redux@4.0.1
