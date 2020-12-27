import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {} from "./../contexts/movies/movieContext";
import { genreContext } from "./../contexts/genre/genreContext";

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
