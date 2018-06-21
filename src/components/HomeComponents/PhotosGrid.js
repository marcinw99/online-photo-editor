import React, { Component } from "react";
import Photo from "./Photo";

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photos-grid d-flex align-items-center flex-wrap">
        {Object.keys(this.props.photos).map(key => (
          <Photo key={key} background={this.props.photos[key]} />
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
