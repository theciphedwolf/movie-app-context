import React, { useContext, useEffect } from "react";
import MovieContext from "./../../contexts/movies/movieContext";

const PopularMovies = () => {
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.searchMovies();

    //eslint-diable-next-line
  }, []);

  return <p>Popular Movies</p>;
};

export default PopularMovies;
