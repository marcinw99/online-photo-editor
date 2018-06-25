import React, { Component, Fragment } from "react";

class Filters extends Component {
  render() {
    return (
      <Fragment>
        <label htmlFor="filter-grayscale">Grayscale</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="50"
          defaultValue="0"
          name="grayscale"
        />
        <label htmlFor="filter-blur">Blur</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="100"
          defaultValue="0"
          name="blur"
        />
        <label htmlFor="filter-brightness">Brightness</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="100"
          defaultValue="100"
          name="brightness"
        />
        <label htmlFor="filter-contrast">Contrast</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="200"
          defaultValue="100"
          name="contrast"
        />
        <label htmlFor="filter-hue_rotate">Hue Rotate</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="360"
          defaultValue="0"
          name="hueRotate"
        />
        <label htmlFor="filter-opacity">Opacity</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="100"
          defaultValue="100"
          name="opacity"
        />
        <label htmlFor="filter-invert">Invert</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="100"
          defaultValue="0"
          name="invert"
        />
        <label htmlFor="filter-saturate">Saturate</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="100"
          defaultValue="100"
          name="saturate"
        />
        <label htmlFor="filter-sepia">Sepia</label>
        <input
          onChange={this.props.handleFilterChange}
          type="range"
          className="filters-range"
          min="0"
          max="100"
          defaultValue="0"
          name="sepia"
        />
      </Fragment>
    );
  }
}

export default Filters;
