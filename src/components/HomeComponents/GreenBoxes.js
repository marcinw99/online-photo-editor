import React, { Component } from "react";

class GreenBoxes extends Component {
  render() {
    return (
      <div className="row justify-content-between px-4 py-1 text-center">
        <div className="green-box-1 col-12 col-md mx-0 my-2 m-md-2 d-flex flex-column justify-content-around">
          <div>
            <h5 className="my-2">Paste link to Unsplash photo</h5>
            <form action="" className="my-1">
              <input
                type="text"
                className="form-control my-1"
                placeholder="Link here..."
              />
              <button type="submit" className="btn btn-success my-1">
                Edit photo from link
              </button>
            </form>
          </div>
        </div>
        <div className="green-box-2 col-12 col-md mx-0 my-2 m-md-2 d-flex flex-column justify-content-around">
          <div>
            <h3 className="my-2">Join a project</h3>
            <form action="" className="my-1">
              <input
                type="text"
                className="form-control my-1"
                placeholder="Project name..."
              />
              <input
                type="text"
                className="form-control my-1"
                placeholder="Password..."
              />
              <button type="submit" className="btn btn-success my-1">
                Connect
              </button>
            </form>
          </div>
        </div>
        <div className="green-box-3 col-12 col-md mx-0 my-2 m-md-2 d-flex flex-column justify-content-around">
          <h3 className="px-5">CHOOSE PHOTO FROM DEVICE</h3>
        </div>
      </div>
    );
  }
}

export default GreenBoxes;
