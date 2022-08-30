import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "./App";
export let rerenderEntireTree = (state: any) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
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
