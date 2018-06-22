import React, { Fragment } from "react";
import GreenBoxes from "./HomeComponents/GreenBoxes";
import PhotosTabsInfo from "./HomeComponents/PhotosTabsInfo";
import SearchTab from "./HomeComponents/SearchTab";
import PhotosGrid from "./HomeComponents/PhotosGrid";

const Home = () => (
  <Fragment>
    <GreenBoxes />
    <SearchTab />
    <PhotosTabsInfo />
    <PhotosGrid />
  </Fragment>
);

export default Home;
