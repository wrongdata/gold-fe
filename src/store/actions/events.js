import * as api from "../api";
import * as ActionTypes from "../actionTypes";

// Actions
export const getEvents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEvents();
    dispatch({ type: ActionTypes.FETCH_EVENTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getEvent = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchEvent(id);
    dispatch({ type: ActionTypes.SINGLE_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateEvent = (id, event) => async (dispatch) => {
  try {
    const { data } = await api.updateEvent(id, event);
    dispatch({ type: ActionTypes.UPDATE_EVENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    await api.deleteEvent(id);
    dispatch({ type: ActionTypes.EVENT_REMOVED, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const createEvent = (event) => async (dispatch) => {
  try {
    const { data } = await api.addEvent(event);
    dispatch({
      type: ActionTypes.EVENT_CREATED,
      payload: data,
    });
  } catch (error) {
    console.log("error", error.message);
  }
};
