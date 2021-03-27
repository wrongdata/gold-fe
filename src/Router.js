import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        {user ? (
          <>
            <Navbar />
            <Footer />
            {user.role ? (
              <>
                <Route exact path="/setting/" component={Settings} />
                <Route exact path="/events/" component={Events} />
                <Route exact path="/events/:id" component={Event} />
                <Route exact path="/new-event" component={Create} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Dashboard} />
              </>
            ) : (
              <>
                <Route exact path="/events/" component={Events} />
              </>
            )}
          </>
        ) : (
          <Route exact path="/" component={MobileLogin} />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
