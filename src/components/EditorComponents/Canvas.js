import React, { Component } from "react";

class Canvas extends Component {
  state = {
    height: 0,
    width: 0,
    tool: this.props.tool,
    size: this.props.size,
    color: this.props.color,
    isDrawing: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props !== state) {
      return { ...props };
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
    this.ctx.globalCompositeOperation = "source-over";
  };

  onMouseUp = event => {
    this.setState({
      isDrawing: false
    });
    if (this.state.tool === "text") {
      const coords = this.getMousePosition(event);
      const text = prompt("Enter text:") || "Hello wurld";
      this.ctx.fillText(text, coords.x, coords.y);
    }
  };

  onMouseMove = event => {
    if (this.state.isDrawing) {
      const coords = this.getMousePosition(event);

      if (this.state.tool === "brush") {
        this.ctx.lineTo(coords.x, coords.y);
        this.ctx.stroke();
      } else if (this.state.tool === "eraser") {
        this.ctx.globalCompositeOperation = "destination-out";
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
      this.ctx.font = `${this.state.size}px Arial`;
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
