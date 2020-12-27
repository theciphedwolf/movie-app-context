import { useEffect, useContext } from "react";
import GenreContext from "../contexts/genres/genreContext";
import MovieContext from "../contexts/movies/movieContext";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  // const genreContext = useContext(GenreContext);
  // const movieContext = useContext(MovieContext);

  // useEffect(() => {
  //   genreContext.searchGenres();
  //   movieContext.searchMovies();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
