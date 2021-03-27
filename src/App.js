import { useEffect } from "react";
import axios from "axios";

import "./app.css";

import Router from "./Router";

import { useDispatch } from "react-redux";
import { getEvents } from "./store/actions/events";
import { userData } from "./store/actions/auth";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userData());
    dispatch(getEvents());
  }, [dispatch]);

  return <Router />;
}

export default App;
