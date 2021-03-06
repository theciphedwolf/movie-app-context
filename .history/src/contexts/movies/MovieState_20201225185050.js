import React, { useReducer } from "react";
import axios from "axios";
import GenreContext from "./movieContext";
import GenreReducer from "./movieReducer";

import { SEARCH_MOVIES } from "../types";

const MovieState = (props) => {
  const initialState = {
    genres: [],
  };

  const [state, dispatch] = useReducer(GenreReducer, initialState);

  // Search Genres
  const searchGenres = async (text) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_API}&language=en-US`
    );

    dispatch({
      type: SEARCH_GENRES,
      payload: res.data.genres,
    });
  };

  return (
    <GenreContext.Provider
      value={{
        genre: state.genres,
        searchGenres,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreState;
