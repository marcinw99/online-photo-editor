// React components
import React from "react";

// CSS

// App components
import Login from "./Login";
import App from "./App";
import Home from "./Home";
import Account from "./Account";
import NotFound from "./NotFound";

// React router, Redux components
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/app" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
