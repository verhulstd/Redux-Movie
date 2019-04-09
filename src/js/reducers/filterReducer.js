import {
  FILTER_MOVIE,
  FILTER_GAME,
  FILTER_SERIES,
  FILTER_EPISODE,
  FILTER_YEAR,
  FILTER_POSTER,
} from '../actions/types';
import { filterState } from '../store/filterState';

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case FILTER_MOVIE:
      return {
        ...state,
        movie: !state.movie,
      };
    case FILTER_GAME:
      return {
        ...state,
        game: !state.game,
      };
    case FILTER_SERIES:
      return {
        ...state,
        series: !state.series,
      };
    case FILTER_EPISODE:
      return {
        ...state,
        episode: !state.episode,
      };
    case FILTER_YEAR:
      return {
        ...state,
        year: action.payload,
      };
    case FILTER_POSTER:
      return {
        ...state,
        poster: !state.poster,
      };
    default:
      return state;
  }
};
