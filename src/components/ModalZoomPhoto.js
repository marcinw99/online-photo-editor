import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

const modalRoot = document.getElementById("modal-root");

class ModalZoomPhoto extends Component {
  closeModal = () => {
    this.props.dispatch({ type: "HIDE_MODAL" });
  };

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.className = "modal-zoom-photo";
    this.children = (
      <Fragment>
        <img
          src={this.props.modals.photo}
          alt="Full size"
          className="img-fluid"
        />
        <button className="btn-close" onClick={this.closeModal}>
          <i class="fas fa-times" />
        </button>
      </Fragment>
    );
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.children, this.el);
  }
}

function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}

export default connect(mapStateToProps)(ModalZoomPhoto);
