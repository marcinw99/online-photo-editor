import React, { Component } from "react";

class SearchTab extends Component {
  render() {
    return (
      <div className="my-5 search-tab">
        <form action="" className="d-block d-md-flex">
          <h2 className="d-inline-block">Search By Tag</h2>
          <input
            type="text"
            className="form-control d-inline-block m-0 mx-md-4"
            placeholder="Search for free photos"
          />
          <button type="submit" className="btn btn-success px-4">
            Search
          </button>
        </form>
        <p className="mt-1">
          Trending searches: <u>business</u>, <u>computer</u>, <u>nature</u>,{" "}
          <u>love</u>, <u>house</u>
        </p>
      </div>
    );
  }
}

export default SearchTab;
