import { useEffect, useContext } from "react";

import GenreContext from "../contexts/genres/genreContext";
import GenreContext from "../contexts/movies/movieContext";

function App() {
  const genreContext = useContext(GenreContext);

  useEffect(() => {
    genreContext.searchGenres();
  }, []);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
