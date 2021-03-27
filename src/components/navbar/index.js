import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, notification } from "antd";

const cn = {
  header:
    "fixed bg-white w-full top-0 left-0 flex flex-row-reverse justify-between items-center py-2 px-4 shadow-md z-50",
  logo: "w-12 mx-auto",
};

function Navbar() {
  const user = useSelector((state) => state.user);

  const history = useHistory();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Logged out.",
    });
  };

  const onLogout = async (values: any) => {
    try {
      await axios.get("http://localhost:5000/auth/logout");
      await history.push("/");
      openNotificationWithIcon("success");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={cn.header}>
      <div>
        <Button type="link" onClick={onLogout}>
          Logout
        </Button>
      </div>
      <div className={cn.logo}>
        <img src="/logo.png" alt="app-logo" />
      </div>
      <div className="text-xs">
        Hello,
        <br />
        <span className="text-xs font-bold">{user.username}</span>
      </div>
    </header>
  );
}

export default Navbar;
