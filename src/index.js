import React from "react";
import { render } from "react-dom";
import App from "./app";
import { Router } from "react-router-dom";
import history from "./history";

const app = document.querySelector("#app");

render(
  <Router history={history}>
    <App />
  </Router>,
  app
);
