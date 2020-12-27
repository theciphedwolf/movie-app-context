import { useEffect, useContext } from "react";

import GenreContext from "../contexts/genres/genreContext";
import MovieContext from "../contexts/movies/movieContext";

function App() {
  const genreContext = useContext(GenreContext);
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    genreContext.searchGenres();
    movieContext.searchMovies();
  }, []);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
