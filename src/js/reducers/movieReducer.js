import { FETCH_MOVIES } from '../actions/types';
import { movieState } from '../store/movieState';

export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
      };
    default:
      return state;
  }
};
