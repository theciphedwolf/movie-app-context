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
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}

export default App;
