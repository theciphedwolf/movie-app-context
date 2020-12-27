import React from "react";

import { useEffect, useContext } from "react";
import GenreContext from "./../../contexts/genres/genreContext";
import MovieContext from "../contexts/movies/movieContext";

const Home = () => {
  const genreContext = useContext(GenreContext);
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    genreContext.searchGenres();
    movieContext.searchMovies();
    // eslint-disable-next-line
  }, []);
  return <p>Home</p>;
};

export default Home;
