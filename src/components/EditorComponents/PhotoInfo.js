import React from "react";

const PhotoInfo = props => (
  <div className="d-flex justify-content-between photo-info">
    <p className="d-inline-block">Uploaded by {props.authorName}</p>
    <p className="d-inline-block">Published on {props.created_at}</p>
    <p className="d-inline-block">
      <u>
        <a
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Unsplash
        </a>
      </u>
    </p>
  </div>
);

export default PhotoInfo;
