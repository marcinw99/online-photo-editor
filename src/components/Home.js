import React, { Component, Fragment } from "react";
import GreenBoxes from "./HomeComponents/GreenBoxes";
import PhotosTabsInfo from "./HomeComponents/PhotosTabsInfo";
import SearchTab from "./HomeComponents/SearchTab";
class Home extends Component {
  render() {
    return (
      <Fragment>
        <GreenBoxes />
        <SearchTab />
        <PhotosTabsInfo />
      </Fragment>
    );
  }
}

export default Home;
