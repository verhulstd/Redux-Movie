import { SEARCH_MOVIES } from '../actions/types';
import { movieState } from '../store/movieState';

export const searchFormReducer = (state = movieState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
