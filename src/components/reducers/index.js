import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

import photos from "./photos";
import modals from "./modals";

const rootReducer = combineReducers({ photos, modals });

export default rootReducer;
