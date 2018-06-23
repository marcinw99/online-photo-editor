import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import rootReducer from "./reducers/index";

const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
