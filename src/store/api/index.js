import axios from "axios";

const url = "https://gold-test-app.herokuapp.com/";
const events = "https://gold-test-app.herokuapp.com/events/";

const getIsAuth = "https://gold-test-app.herokuapp.com/auth/user/";
const getUserData = "https://gold-test-app.herokuapp.com/auth/data/";
const getLogout = "https://gold-test-app.herokuapp.com/auth/logout/";
const getSingleEvent = "https://gold-test-app.herokuapp.com/events/";

export const fetchEvents = () => axios.get(events);
export const fetchEvent = (id) => axios.get(`${events}${id}`);
export const addEvent = (newEvent) => axios.post(`${events}create`, newEvent);
export const updateEvent = (id, updatedPost) =>
  axios.patch(`${events}${id}`, updatedPost);
export const deleteEvent = (id) => axios.delete(`${events}${id}`);
export const isAuth = () => axios.get(getIsAuth);
export const userData = () => axios.get(getUserData);
export const logout = () => axios.get(getLogout);
