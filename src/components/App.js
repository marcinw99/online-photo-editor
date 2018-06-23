// React components
import React, { Component } from "react";

// Application components
import Navbar from "./AppComponents/Navbar";
import Login from "./Login";
import Documentation from "./Documentation";
import Home from "./Home";
import Account from "./Account";
import NotFound from "./NotFound";
import Modal from "./Modal";

// APIs, Helpers
import Unsplash, { toJson } from "unsplash-js";
import Auth from "../helpers/Auth";

// React router, Redux components
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const unsplash = new Unsplash({
  applicationId: Auth.ACCESS_KEY,
  secret: Auth.SECRET_KEY
});

// Downloading latest photos
store.dispatch(dispatch => {
  dispatch({ type: "FETCH_PHOTOS_START" });
  unsplash.photos
    .listPhotos(1, 15, "latest")
    .then(toJson)
    .then(json => {
      dispatch({ type: "RECEIVE_PHOTOS", payload: json });
    })
    .catch(err => {
      dispatch({ type: "FETCH_PHOTOS_ERRO", payload: err });
    });
});

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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
export default App;
