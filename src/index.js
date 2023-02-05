import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const myStore = createStore(reducer, applyMiddleware(thunk));

root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <>
        <App />
        <ToastContainer />
      </>
    </BrowserRouter>
  </Provider>
);
