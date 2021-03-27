import * as ActionTypes from "../actionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case ActionTypes.IS_AUTH:
      return action.payload;
    default:
      return users;
  }
};
