import React, { Component, Fragment } from "react";
import GreenBoxes from "./HomeComponents/GreenBoxes";
import PhotosTabsInfo from "./HomeComponents/PhotosTabsInfo";
import SearchTab from "./HomeComponents/SearchTab";
import PhotosGrid from "./HomeComponents/PhotosGrid";

import Unsplash, { toJson } from "unsplash-js";
import Auth from "../helpers/Auth";

class Home extends Component {
  state = {
    photos: []
  };
  componentDidMount() {
    const unsplash = new Unsplash({
      applicationId: Auth.ACCESS_KEY,
      secret: Auth.SECRET_KEY
    });
    unsplash.photos
      .listPhotos(1, 15, "latest")
      .then(toJson)
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }

  render() {
    return (
      <Fragment>
        <GreenBoxes />
        <SearchTab />
        <PhotosTabsInfo />
        <PhotosGrid photos={this.state.photos} />
      </Fragment>
    );
  }
}

export default Home;
