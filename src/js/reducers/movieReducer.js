import { SAVE_MOVIES } from '../actions/types';
import { movieState } from '../store/movieState';

export const movieReducer = (state = movieState, action) => {
  switch (action.type) {
    case SAVE_MOVIES:
      return [...action.payload];
    default:
      return state;
  }
};
