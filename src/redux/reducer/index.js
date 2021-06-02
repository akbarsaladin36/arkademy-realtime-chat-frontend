import { combineReducers } from "redux";

import counter from "./counter";
import user from "./user";
import contact from "./contact";
import roomChat from "./roomChat";
import auth from "./auth";

export default combineReducers({
  counter,
  auth,
  user,
  contact,
  roomChat,
});
