import React, { useReducer } from "react";
import axios from "axios";
import GenreContext from "./genreContext";
import GenreReducer from "./genreReducer";

const GenreState = (props) => {
  const initialState = {
    genres: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Genres
  const searchGenres = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
};
