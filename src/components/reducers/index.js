import { combineReducers } from "redux";
// import { routerReducer } from "react-router-redux";

import editor from "./editor";
import photos from "./photos";
import modals from "./modals";

const rootReducer = combineReducers({ photos, modals, editor });

export default rootReducer;
