import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EventsIndex from "./components/events_index";
import reportWebVitals from "./reportWebVitals";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import thunk from "redux-thunk";

//アプリケーション内で唯一のstore
//アプリケーションで作成されすstateはstoreに集約される
const store = createStore(reducer, applyMiddleware(thunk));

//他のコンポーネントからstoreを参照できるようにするために、
//Providerでラップし、propsにstoreを渡す
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
