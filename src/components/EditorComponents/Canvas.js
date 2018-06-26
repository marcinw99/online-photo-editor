import React, { Component } from "react";

class Canvas extends Component {
  state = {
    height: 0,
    width: 0,
    tool: "brush",
    size: 5,
    color: "#000000",
    isDrawing: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.height !== state.height || props.width !== state.width) {
      return {
        height: props.height,
        width: props.width
      };
    }
    return null;
  }

  componentDidMount() {
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
  }

  getMousePosition = event => {
    var container = event.target.getBoundingClientRect();
    const mouseX = event.pageX - container.left;
    const mouseY = event.pageY - container.top;
    return { x: mouseX, y: mouseY };
  };

  onMouseDown = event => {
    this.setState({
      isDrawing: true
    });
    const coords = this.getMousePosition(event);
    this.ctx.beginPath();
    this.ctx.moveTo(coords.x, coords.y);
  };

  onMouseUp = event => {
    this.setState({
      isDrawing: false
    });
  };

  onMouseMove = event => {
    if (this.state.isDrawing) {
      console.log("moving!");
      const coords = this.getMousePosition(event);

      if (this.state.tool === "brush") {
        this.ctx.lineTo(coords.x, coords.y);
        this.ctx.stroke();
      }
    }
  };

  onMouseLeave = event => {
    this.setState({
      isDrawing: false
    });
  };

  render() {
    if (this.ctx) {
      this.ctx.strokeStyle = this.state.color;
      this.ctx.lineWidth = this.state.size;
    }
    return (
      <canvas
        id="canvas"
        width={this.state.width}
        height={this.state.height}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        onMouseMove={this.onMouseMove}
      />
    );
  }
}

export default Canvas;
