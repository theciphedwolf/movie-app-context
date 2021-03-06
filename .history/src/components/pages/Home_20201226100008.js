import React, { Fragment } from "react";
import { useEffect, useContext } from "react";
import GenreContext from "./../../contexts/genres/genreContext";
import MovieContext from "./../../contexts/movies/movieContext";

import PopularMovies from "./../layout/PopularMovies";
import Genres from "./../layout/Genres";

const Home = () => {
  return (
    <Fragment>
      <Genres></Genres>
      <PopularMovies></PopularMovies>
    </Fragment>
  );
};

export default Home;
