//Imports
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Mock API
import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
