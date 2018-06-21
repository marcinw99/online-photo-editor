import React from "react";

const PhotosTabsInfo = () => (
  <div className="d-block d-md-flex photos-tabs-info mb-4 mt-0 mt-md-3">
    <h1 className="d-inline-block my-4 my-md-0 mx-0 ml-md-auto order-3">
      Photos delivered by{" "}
      <u>
        <a href="https://unsplash.com/" target="_blank" className="text-dark">
          Unsplash
        </a>
      </u>
    </h1>
    <h1 className="d-inline-block order-1">Trending</h1>
    <h1 className="d-inline-block text-secondary ml-5 order-2">New</h1>
  </div>
);

export default PhotosTabsInfo;
