import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import GreenBoxes from "./HomeComponents/GreenBoxes";
import PhotosTabsInfo from "./HomeComponents/PhotosTabsInfo";
import SearchTab from "./HomeComponents/SearchTab";
import PhotosGrid from "./HomeComponents/PhotosGrid";
import ModalZoomPhoto from "./ModalZoomPhoto";

class Home extends Component {
  render() {
    /*const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different
            part of the DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null; */
    const modalZoomPhoto = this.props.modals.show ? (
      <ModalZoomPhoto photo={this.props.modals.photo} />
    ) : null;
    return (
      <Fragment>
        <GreenBoxes />
        <SearchTab />
        <PhotosTabsInfo />
        <PhotosGrid />
        {modalZoomPhoto}
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps)(Home);
