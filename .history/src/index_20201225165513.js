import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GenreState from "./contexts/genres/GenreState";

ReactDOM.render(
  <React.StrictMode>
    <GenreState>
      <App />
    </GenreState>
  </React.StrictMode>,
  document.getElementById("root")
);
