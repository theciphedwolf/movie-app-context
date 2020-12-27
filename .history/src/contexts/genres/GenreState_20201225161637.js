import React, { useReducer } from "react";
import axios from "axios";
import GenreContext from "./genreContext";
import GenreReducer from "./genreReducer";

import { SEARCH_GENRES } from "../types";

const GenreState = (props) => {
  const initialState = {
    genres: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Genres
  const searchGenres = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=44cce3d2400cccc7cb41aba6128cb80a&language=en-US`
    );

    dispatch({
      type: SEARCH_GENRES,
      payload: res.data.items,
    });
  };

  return (
    <GenreContext.Provider
      value={{
        genre: state.users,
        searchGenres,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreState;
