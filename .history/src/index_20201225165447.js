import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <GenreState>
      <App />
    </GenreState>
  </React.StrictMode>,
  document.getElementById("root")
);
