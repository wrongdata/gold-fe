import * as ActionTypes from "../actionTypes";

export default (events = [], action) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS:
      return action.payload;

    case ActionTypes.UPDATE_EVENT:
      return events.map((event) =>
        event._id === action.payload._id ? action.payload : event
      );
    case ActionTypes.EVENT_CREATED:
      return [...events, { data: action.payload }];
    case ActionTypes.EVENT_REMOVED:
      return events.filter((event) => event._id !== action.payload);
    default:
      return events;
  }
};
