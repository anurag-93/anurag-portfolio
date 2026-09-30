import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./styles/Variables.css";
import "./styles/Globals.css";
import "./styles/Utilities.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);