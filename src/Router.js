import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

// Pages
import MobileLogin from "./pages/login";
import Settings from "./pages/settings";
import Create from "./pages/events/Create";
import Events from "./pages/events/Events";
import Event from "./pages/events/Event";
import Dashboard from "./pages/dashboard/";

import { useSelector } from "react-redux";

function Router() {
  const user = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Switch>
        <>
          {user.role === "admin" ? (
            <>
              <Navbar />
              <Footer />
              <Route path="/setting/" component={Settings} />
              <Route path="/events/" component={Events} />
              <Route path="/events/:id" component={Event} />
              <Route path="/new-event" component={Create} />
              <Route path="/" component={Dashboard} />
            </>
          ) : (
            <>
              <Redirect to="/login" />
              <Route exact path="/login" component={MobileLogin} />
            </>
          )}
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
