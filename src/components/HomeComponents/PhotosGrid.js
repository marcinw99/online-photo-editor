import React, { Component } from "react";
import Photo from "./Photo";
import { connect } from "react-redux";

class PhotosGrid extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "ADD_NEWEST_PHOTOS" });
  }
  zoomPhoto = photo => {
    this.props.dispatch({ type: "SHOW_MODAL", payload: photo });
  };

  render() {
    return (
      <div className="photos-grid d-flex align-items-center flex-wrap">
        {Object.keys(this.props.photos.photos).map(key => (
          <Photo
            key={key}
            zoomPhoto={this.zoomPhoto}
            background={this.props.photos.photos[key]}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  };
}

export default connect(mapStateToProps)(PhotosGrid);
