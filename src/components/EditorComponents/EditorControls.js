import React from "react";

const EditorControls = props => {
  return (
    <div className="editor-controls d-inline-flex align-items-center ml-auto pb-3 pt-1">
      <button className="btn-custom">
        <i className="fas fa-users" />
      </button>
      <button className="btn-custom">
        <i className="fas fa-share" />
      </button>
      <button className="btn-custom" onClick={props.saveImageToUrl}>
        <a id="download-photo">
          <i className="fas fa-save" />
        </a>
      </button>
    </div>
  );
};

export default EditorControls;
