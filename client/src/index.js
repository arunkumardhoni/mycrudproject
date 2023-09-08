import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";

import App from "./info/App";
import reportWebVitals from "./reportWebVitals";

const rootid = ReactDOM.createRoot(document.getElementById("root"));
rootid.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();