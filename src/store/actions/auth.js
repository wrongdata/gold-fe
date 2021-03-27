import * as api from "../api";
import * as ActionTypes from "../actionTypes";

// Actions

export const userData = () => async (dispatch) => {
  try {
    const { data } = await api.userData();
    dispatch({ type: ActionTypes.IS_AUTH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
