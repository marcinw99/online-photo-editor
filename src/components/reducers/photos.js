const initialState = {
  photos: [],
  fetching: false,
  fetched: false,
  error: null
};

function photos(state = initialState, action) {
  switch (action.type) {
    case "FETCH_PHOTOS_START":
      return { ...state, fetching: true };
    case "FETCH_PHOTOS_ERROR":
      return { ...state, fetching: false, error: action.payload };
    case "RECEIVE_PHOTOS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        photos: action.payload
      };
    default:
      return state;
  }
}

export default photos;
