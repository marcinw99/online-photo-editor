import React, { Component } from "react";
import { connect } from "react-redux";
import GreenBoxes from "./HomeComponents/GreenBoxes";
import PhotosTabsInfo from "./HomeComponents/PhotosTabsInfo";
import SearchTab from "./HomeComponents/SearchTab";
import PhotosGrid from "./HomeComponents/PhotosGrid";
import ModalZoomPhoto from "./ModalZoomPhoto";

class Home extends Component {
  render() {
    const modalZoomPhoto = this.props.modals.show ? (
      <ModalZoomPhoto photo={this.props.modals.photo} />
    ) : null;
    return (
      <div className="p-4">
        <GreenBoxes />
        <SearchTab />
        <PhotosTabsInfo />
        <PhotosGrid />
        {modalZoomPhoto}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps)(Home);
