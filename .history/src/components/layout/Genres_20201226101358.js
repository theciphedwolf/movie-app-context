import React, { useEffect, useContext } from "react";
import GenreContext from "./../../contexts/genres/genreContext";

const Genres = () => {
  const genreContext = useContext(GenreContext);

  useEffect(() => {
    genreContext.searchGenres();
    // eslint-disable-next-line
  }, []);

  return <p>Genres</p>;
};

export default Genres;
