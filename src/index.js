import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./styles/css/style.css";
import registerServiceWorker from "./registerServiceWorker";

render(<Router />, document.getElementById("root"));
registerServiceWorker();
