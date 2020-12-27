import { useEffect, useContext } from "react";
import GenreState from "../contexts/genres/GenreState";
import GenreContext from "../contexts/genres/genreContext";

function App() {
  const genreContext = useContext(GenreContext);

  useEffect(() => {
    genreContext.searchGenres();
  });

  return (
    <GenreState>
      <div className="App">
        <p>Hello World</p>
      </div>
    </GenreState>
  );
}

export default App;
