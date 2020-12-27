import React, { Fragment } from "react";

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
