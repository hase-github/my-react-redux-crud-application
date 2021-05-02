import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import events from "./events";

//redux-formの使い方に従って、redux-formが提供するreduerをcombineする
export default combineReducers({ events, form });
