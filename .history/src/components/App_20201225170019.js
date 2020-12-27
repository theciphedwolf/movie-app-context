import { useEffect, useContext } from "react";

import GenreContext from "../contexts/genres/genreContext";

function App() {
  const genreContext = useContext(GenreContext);

  useEffect(() => {
    genreContext.searchGenres();
    eslint_disable_next_line;
  }, []);

  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
