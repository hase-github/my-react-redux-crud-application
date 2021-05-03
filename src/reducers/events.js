import _ from "lodash";
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      //取得したままのデータ
      //[
      //  {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      //  {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      //]
      //使いにくので、下のようにlodashを使ってidをキーにしたオブジェクトに書き換える
      //{
      //  1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
      //  2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
      //}

      return _.mapKeys(action.response.data, "id");

    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data;
      return { ...events, [data.id]: data };

    case DELETE_EVENT:
      //console.log(action.id);
      delete events[action.id]; //オブジェクトからキーに紐づくプロパティを削除する
      return events; //講座ではreturn { ...events } としていたが、これでも動くぞ？

    default:
      return events;
  }
};
