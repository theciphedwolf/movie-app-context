import React, { useReducer } from "react";
import axios from "axios";
import GenreContext from "./genreContext";
import GenreReducer from "./genreReducer";

const GenreState = (props) => {
  const initialState = {
    genres: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
};
