import React, { Component } from "react";
import { connect } from "react-redux";

import { initialFiltersValues, initialCSSFilters } from "./data/filters";

import Filters from "./EditorComponents/Filters";
import Canvas from "./EditorComponents/Canvas";
import CanvasControls from "./EditorComponents/CanvasControls";
import PhotoInfo from "./EditorComponents/PhotoInfo";
import EditorControls from "./EditorComponents/EditorControls";

var CSSReadyFilters = initialCSSFilters;
const filtersValues = initialFiltersValues;

class Editor extends Component {
  state = {
    CSSReadyFilters,
    filtersForCanvas: "",
    photo: {
      authorName: "",
      created_at: "",
      width: 0,
      height: 0,
      downloadLink: ""
    },
    project: {
      tool: "brush",
      size: 5,
      color: "#ff0000",
      saveOnDevice: false,
      imgWithFilters: {}
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
    const filtersForCanvas = `grayscale(${filtersValues.grayscale}%) blur(${
      filtersValues.blur
    }px) brightness(${filtersValues.brightness}%) contrast(${
      filtersValues.contrast
    }%) hue-rotate(${filtersValues.hueRotate}deg) opacity(${
      filtersValues.opacity
    }%) invert(${filtersValues.invert}%) saturate(${
      filtersValues.saturate
    }%) sepia(${filtersValues.sepia}%)`;
    this.setState({
      CSSReadyFilters,
      filtersForCanvas
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
    this.setState({
      project: {
        [control]: value
      }
    });
  };

  saveImageToUrl = () => {
    console.log("Starting");
    const photoWidth = this.state.photo.width;
    const photoHeight = this.state.photo.height;
    // create a temporary canvas of photo and applied filters, DOM PARSER DOESNT WORK :(
    console.log("Creating tempCanvas");
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = photoWidth;
    tempCanvas.height = photoHeight;
    console.log("Created");
    console.log("Creating tempPhoto");
    const tempPhoto = new Image();
    tempPhoto.crossOrigin = "Anonymous";
    tempPhoto.src = this.props.editor.photo.urls.full;
    console.log("Created");
    console.log("Starting photo download");
    tempPhoto.onload = () => {
      console.log("Downloaded");
      tempPhoto.width = photoWidth;
      tempPhoto.height = photoHeight;
      console.log("Appending photo to canvas");
      const ctx = tempCanvas.getContext("2d");
      ctx.filter = this.state.filtersForCanvas;
      ctx.drawImage(tempPhoto, 0, 0, photoWidth, photoHeight);
      ctx.filter = "none";
      // merge with user's drawings
      console.log("Appending user's drawings");
      const canvas = document.getElementById("canvas");
      ctx.drawImage(canvas, 0, 0, photoWidth, photoHeight);
      // download
      console.log("Creating download link");
      var link = document.createElement("a");
      link.href = tempCanvas.toDataURL("image/png");
      link.download = "project.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("Done");
    };
  };

  componentDidMount() {
    // Downloading photo (handling CORS Policy)
    // this.props.downloadSinglePhoto(this.props.editor.photo);
  }

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
            <div className="controls-panel d-flex justify-content-between">
              <CanvasControls
                handleControlsChange={this.handleControlsChange}
              />
              <EditorControls saveImageToUrl={this.saveImageToUrl} />
            </div>

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
