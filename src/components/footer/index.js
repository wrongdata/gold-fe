import React from "react";

const cn = {
  footer:
    "fixed bottom-0 left-0 bg-white w-full h-16 flex flex-row-reverse justify-around items-center py-2 px-4 shadow-md  z-50 border-t",
  logo: "w-12 mx-auto",
};

function Footer() {
  return (
    <footer className={cn.footer}>
      <div>
        <a href="/dashboard">
          <img src="/icon-dashboard.svg" alt="icon" />
        </a>
      </div>
      <div>
        <a href="/new-event">
          <img src="/icon-add.svg" alt="icon" />
        </a>
      </div>
      <div>
        <a href="/events">
          <img src="/icon-search.svg" alt="icon" />
        </a>
      </div>

      <div>
        <a href="/setting">
          <img src="/icon-setting.svg" alt="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
