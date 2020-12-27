import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieState, { MovieContext } from "./../contexts/movies/MovieState";
import GenreState, { GenreContext } from "./../contexts/genres/GenreState";

import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <GenreState>
            <MovieState>
              <Home />
            </MovieState>
          </GenreState>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
