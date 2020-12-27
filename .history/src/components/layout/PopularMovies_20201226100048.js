import React, { useContext } from "react";
import MovieContext from "./../../contexts/movies/movieContext";
const PopularMovies = () => {
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.searchMovies();
  }, []);

  return <p>Popular Movies</p>;
};

export default PopularMovies;
