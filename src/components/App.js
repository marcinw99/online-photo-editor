// React components
import React from "react";

// App components
import Navbar from "./AppComponents/Navbar";
import Login from "./Login";
import Documentation from "./Documentation";
import Home from "./Home";
import Account from "./Account";
import NotFound from "./NotFound";

// React router, Redux components
import { BrowserRouter, Route, Switch } from "react-router-dom";

// routing between pages
const Page = ({ match }) => {
  switch (match.params.pageName) {
    case "home":
      return <Home />;
    case "account":
      return <Account />;
    case "docs":
      return <Documentation />;
    default:
      return <NotFound />;
  }
};

const App = () => (
  <BrowserRouter>
    <div className="main-container">
      <Navbar />
      <div className="container app-container p-4">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/app/:pageName" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
