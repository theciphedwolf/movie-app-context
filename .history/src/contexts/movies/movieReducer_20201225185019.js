import { SEARCH_MOVIES } from "../types";

export default (state, action) => {
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
