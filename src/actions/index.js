import axios from "axios";
export const READ_EVENTS = "READ_EVENTS";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

//redux-thunkでACTIONの代わりに関数を返すaction createrを書くことができる
export const readEvents = () => async (dispach) => {
  //axiosは戻り値がPromiseになるので、async, awaitを使って戻り値を扱う
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  //console.log(response);
  dispach({ type: READ_EVENTS, response });
};
