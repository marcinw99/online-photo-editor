import React from "react";

const CanvasControls = props => {
  const handleToolsChange = name => {
    props.handleControlsChange("tool", name);
  };

  const handleColorsChange = event => {
    props.handleControlsChange("color", event.target.value);
  };

  const handleSizeChange = event => {
    props.handleControlsChange("size", event.target.value);
  };

  return (
    <div className="canvas-controls d-inline-flex align-items-center mr-auto pb-3 pt-1">
      <button
        className="btn-custom"
        onClick={() => handleToolsChange("eraser")}
      >
        <i className="fas fa-eraser" />
      </button>
      <button className="btn-custom" onClick={() => handleToolsChange("move")}>
        <i className="fas fa-arrows-alt" />
      </button>
      <button className="btn-custom" onClick={() => handleToolsChange("text")}>
        <i className="fas fa-font" />
      </button>
      <button className="btn-custom" onClick={() => handleToolsChange("brush")}>
        <i className="fas fa-paint-brush" />
      </button>
      <input
        type="color"
        defaultValue="#ff0000"
        id="btn-color"
        onChange={handleColorsChange}
      />
      <input
        type="number"
        className="text-center"
        defaultValue="5"
        onChange={handleSizeChange}
      />
    </div>
  );
};

export default CanvasControls;
