import { SEARCH_GENRES } from "../types";

const genreReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_GENRES:
      return {
        ...state,
        genres: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
