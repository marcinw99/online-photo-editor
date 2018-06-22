const initialState = {
  photo: "",
  show: false
};

function modals(state = initialState, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, show: true, photo: action.payload };
    case "HIDE_MODAL":
      return { ...state, show: false, photo: "" };
    default:
      return state;
  }
}

export default modals;
