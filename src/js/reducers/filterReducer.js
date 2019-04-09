import {
  FILTER_MOVIE,
  FILTER_GAME,
  FILTER_SERIES,
  FILTER_EPISODE,
  FILTER_YEAR,
  FILTER_POSTER,
} from '../actions/types';
import { movieState } from '../store/movieState';

export const filterReducer = (state = movieState, action) => {
  switch (action.type) {
    case FILTER_MOVIE:
      return {
        ...state,
        filters: {
          movie: true,
          game: false,
          series: false,
          episodes: false,
          year: 0,
          poster: false,
        },
      };
    case FILTER_GAME:
      return {
        ...state,
        filters: {
          movie: false,
          game: true,
          series: false,
          episodes: false,
          year: 0,
          poster: false,
        },
      };
    case FILTER_SERIES:
      return {
        ...state,
        filters: {
          movie: false,
          game: false,
          series: true,
          episodes: false,
          year: 0,
          poster: false,
        },
      };
    case FILTER_EPISODE:
      return {
        ...state,
        filters: {
          movie: false,
          game: false,
          series: false,
          episodes: true,
          year: 0,
          poster: false,
        },
      };
    case FILTER_YEAR:
      return {
        ...state,
        filters: {
          movie: false,
          game: false,
          series: false,
          episodes: false,
          year: action.payload,
          poster: false,
        },
      };
    case FILTER_POSTER:
      return {
        ...state,
        filters: {
          movie: false,
          game: false,
          series: false,
          episodes: false,
          year: 0,
          poster: true,
        },
      };
    default:
      return state;
  }
};
