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
      `https://api.themoviedb.org/3/genre/movie/list?api_key=44cce3d2400cccc7cb41aba6128cb80a&language=en-US`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  return (
    <GenreContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreState;
