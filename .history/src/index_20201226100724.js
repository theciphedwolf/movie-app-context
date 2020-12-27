import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GenreState from "./contexts/genres/GenreState";
import MovieState from "./contexts/movies/MovieState";

ReactDOM.render(
  
    <GenreState>
      <MovieState>
        <App />
      </MovieState>
    </GenreState>
  </React.StrictMode>,
  document.getElementById("root")
);
