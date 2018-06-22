import React, { Component } from "react";

class Photo extends Component {
  zoomPhoto = () => {
    this.props.zoomPhoto(this.props.background.urls.full);
  };

  render() {
    const thumbnail = this.props.background.urls.small;
    return (
      <div className="d-inline-block photo-tile col-12 col-md-4">
        <img src={thumbnail} alt="foteczka" />
        <div className="d-inline-block photo-buttons">
          <button className="btn-zoom" onClick={this.zoomPhoto}>
            <i className="fas fa-search-plus" />
          </button>
          <button className="btn-edit ml-3">
            <i className="fas fa-edit" />
          </button>
        </div>
      </div>
    );
  }
}

export default Photo;
