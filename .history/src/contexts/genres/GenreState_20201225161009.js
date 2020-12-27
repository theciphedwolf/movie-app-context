import React, { useReducer } from "react";
import axios from "axios";
import GenreContext from "./genreContext";
import GenreReducer from "./genreReducer";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
};
