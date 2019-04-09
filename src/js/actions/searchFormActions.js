import { SEARCH_MOVIES } from './types';

export const searchMovie = str => dispatch => {
  dispatch({
    type: SEARCH_MOVIES,
    payload: str,
  });
};
