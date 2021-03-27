import axios from "axios";
import AuthContext from "../../context/AuthContext";
import React, { useContext } from "react";
import { Button } from "antd";

import { LogoutOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

function Logout() {
  const history = useHistory();
  const { getLoggedIn } = useContext(AuthContext);
  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    await getLoggedIn();
    history.push("/");
  }

  return (
    <Button onClick={logOut} icon={<LogoutOutlined />} type="primary">
      Logout
    </Button>
  );
}

export default Logout;
