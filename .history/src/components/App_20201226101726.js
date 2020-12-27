import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MovieContext } from "./../contexts/movies/MovieState";
import { GenreContext } from "./../contexts/genres/GenreState";

import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
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
