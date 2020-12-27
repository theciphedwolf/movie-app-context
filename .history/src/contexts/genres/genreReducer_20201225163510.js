import { SEARCH_GENRES } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_GENRES:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
