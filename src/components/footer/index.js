import React from "react";
import { Link } from "react-router-dom";

const cn = {
  footer:
    "fixed bottom-0 left-0 bg-white w-full h-16 flex flex-row-reverse justify-around items-center py-2 px-4 shadow-md  z-50 border-t",
  logo: "w-12 mx-auto",
};

function Footer() {
  return (
    <footer className={cn.footer}>
      <div>
        <Link to="/dashboard">
          <img src="/icon-dashboard.svg" alt="icon" />
        </Link>
      </div>
      <div>
        <Link to="/new-event">
          <img src="/icon-add.svg" alt="icon" />
        </Link>
      </div>
      <div>
        <Link to="/events">
          <img src="/icon-search.svg" alt="icon" />
        </Link>
      </div>

      <div>
        <Link to="/setting">
          <img src="/icon-setting.svg" alt="icon" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
