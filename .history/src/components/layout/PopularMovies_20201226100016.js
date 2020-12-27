import React from "react";

const PopularMovies = () => {
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.searchMovies();
  }, []);

  return <p>Popular Movies</p>;
};

export default PopularMovies;
