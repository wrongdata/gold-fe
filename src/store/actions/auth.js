import * as api from "../api";

// Actions

export const userData = () => async (dispatch) => {
  try {
    const { data } = await api.userData();
    dispatch({ type: "IS_AUTH", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
