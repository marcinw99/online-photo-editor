import React, { Component } from "react";
import { connect } from "react-redux";

import Filters from "./EditorComponents/Filters";
import Canvas from "./EditorComponents/Canvas";
import CanvasControls from "./EditorComponents/CanvasControls";
import PhotoInfo from "./EditorComponents/PhotoInfo";

import { initialFiltersValues, initialCSSFilters } from "./data/filters";

var CSSReadyFilters = initialCSSFilters;
const filtersValues = initialFiltersValues;

class Editor extends Component {
  state = {
    CSSReadyFilters,
    photo: {
      authorName: "",
      created_at: "",
      width: 0,
      height: 0
    },
    project: {
      tool: "brush",
      size: 5,
      color: "#ff0000"
    }
  };

  handleFilterChange = event => {
    filtersValues[event.target.name] = event.target.value;
    CSSReadyFilters = {
      filter: `grayscale(${filtersValues.grayscale}%) blur(${
        filtersValues.blur
      }px) brightness(${filtersValues.brightness}%) contrast(${
        filtersValues.contrast
      }%) hue-rotate(${filtersValues.hueRotate}deg) opacity(${
        filtersValues.opacity
      }%) invert(${filtersValues.invert}%) saturate(${
        filtersValues.saturate
      }%) sepia(${filtersValues.sepia}%)`
    }; // jprdl ale fuszerke odwalilem
    this.setState({
      CSSReadyFilters
    });
  };

  handleImageLoaded = photo => {
    const authorName = this.props.editor.photo.user.name;
    const created_at = this.props.editor.photo.created_at.substring(0, 10);
    const width = photo.target.width;
    const height = photo.target.height;
    this.setState({
      photo: {
        authorName,
        created_at,
        height,
        width
      }
    });
  };

  handleControlsChange = (control, value) => {
    console.log(control, value);
    this.setState({
      project: {
        [control]: value
      }
    });
  };

  render() {
    return this.props.editor.photo ? (
      <div className="px-4 py-2 editor-container">
        <div className="row">
          <div className="col-3 editor-filters">
            <h3 className="text-center">
              Project owner:<br /> <span id="owner-nickname">You</span>
            </h3>
            <div className="editor-filters-settings px-3 py-2">
              <h3 className="text-center m-0">Filters</h3>
              <Filters handleFilterChange={this.handleFilterChange} />
            </div>
          </div>
          <div className="col-9 editor-photo">
            <CanvasControls handleControlsChange={this.handleControlsChange} />
            <div
              className="editor-photo-container text-center"
              id="editor-photo-container"
            >
              <img
                src={this.props.editor.photo.urls.full}
                alt="pls w8"
                className="img-fluid"
                onLoad={this.handleImageLoaded}
                style={this.state.CSSReadyFilters}
              />
              <Canvas
                height={this.state.photo.height}
                width={this.state.photo.width}
                {...this.state.project}
              />
            </div>
            <PhotoInfo
              authorName={this.state.photo.authorName}
              created_at={this.state.photo.created_at}
            />
          </div>
        </div>
      </div>
    ) : (
      <h1>Please choose photo you want to edit</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    editor: state.editor
  };
}

export default connect(mapStateToProps)(Editor);
