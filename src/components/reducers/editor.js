const initialState = {
  photo: ""
};

function editor(state = initialState, action) {
  switch (action.type) {
    case "EDIT_PHOTO":
      return { ...state, photo: action.payload };
    default:
      return state;
  }
}

export default editor;
