import React, { Component } from "react";
import { Link } from "react-router-dom";

class Photo extends Component {
  zoomPhoto = () => {
    this.props.zoomPhoto(this.props.background.urls.full);
  };

  editPhoto = () => {
    this.props.editPhoto(this.props.background);
  };

  render() {
    const thumbnail = this.props.background.urls.small;
    return (
      <div className="d-inline-block photo-tile col-12 col-md-4">
        <img src={thumbnail} alt="foteczka" />
        <div className="d-inline-block photo-buttons">
          <button className="btn-custom btn-zoom" onClick={this.zoomPhoto}>
            <i className="fas fa-search-plus" />
          </button>
          <Link to="/app/edit">
            <button
              className="btn-custom btn-edit ml-3"
              onClick={this.editPhoto}
            >
              <i className="fas fa-edit" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Photo;
