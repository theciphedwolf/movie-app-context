import { useEffect } from "react";
import GenreState from "../contexts/genres/GenreState";
import genreContext from "../contexts/genres/genreContext";

function App() {
  const genreContext = useContext(genreContext);

  useEffect(() => {});

  return (
    <GenreState>
      <div className="App">
        <p>Hello World</p>
      </div>
    </GenreState>
  );
}

export default App;
