import React, { Component } from "react";
import { connect } from "react-redux";

import Filters from "./EditorComponents/Filters";

import { initialFiltersValues, initialCSSFilters } from "./data/filters";

var CSSReadyFilters = initialCSSFilters;
const filtersValues = initialFiltersValues;

class Editor extends Component {
  state = {
    CSSReadyFilters,
    photo: {
      authorName: "",
      created_at: ""
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

  componentDidMount() {
    if (this.props.editor.photo !== undefined) {
      const authorName = this.props.editor.photo.user.name;
      const created_at = this.props.editor.photo.created_at.substring(0, 10);
      this.setState({
        photo: {
          authorName,
          created_at
        }
      });
    }
  }

  render() {
    return this.props.editor.photo !== undefined ? (
      <div className="px-4 py-2 editor-container">
        <div className="row">
          <div className="col-3 editor-filters">
            <h3>
              Project owner: <span id="owner-nickname">You</span>
            </h3>
            <div className="editor-filters-settings px-3 py-2">
              <h3 className="text-center m-0">Filters</h3>
              <Filters handleFilterChange={this.handleFilterChange} />
            </div>
          </div>
          <div className="col-9 editor-photo text-center">
            <div className="editor-photo-container">
              <img
                src={this.props.editor.photo.urls.full}
                alt="pls w8"
                className="img-fluid"
                style={this.state.CSSReadyFilters}
              />
            </div>
            <div className="d-flex justify-content-between">
              <p className="d-inline-block">
                Uploaded by {this.state.photo.authorName}
              </p>
              <p className="d-inline-block">
                Published on {this.state.photo.created_at}
              </p>
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
