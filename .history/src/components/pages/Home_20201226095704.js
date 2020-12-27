import React, { Fragment } from "react";

import { useEffect, useContext } from "react";
import GenreContext from "./../../contexts/genres/genreContext";
import MovieContext from "./../../contexts/movies/movieContext";

const Home = () => {
  const genreContext = useContext(GenreContext);
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    genreContext.searchGenres();
    movieContext.searchMovies();
  }, []);
  return;
  <Fragment></Fragment>;
};

export default Home;
