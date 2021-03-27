import { combineReducers } from "redux";

import events from "./reducers/events";
import user from "./reducers/users";

export default combineReducers({
  user,
  events,
});
