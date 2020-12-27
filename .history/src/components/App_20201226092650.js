import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

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
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
