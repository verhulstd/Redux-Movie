import axios from 'axios';
import { SAVE_MOVIES, SET_SEARCH } from './types';

export const saveMovies = movies => ({
  type: SAVE_MOVIES,
  payload: movies,
});

export const setSearch = str => ({
  type: SET_SEARCH,
  payload: str,
});

export const fetchMovies = str => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=e066762a&s=${str}`)
    .then(res => {
      dispatch(saveMovies(res.data.Search));
    })
    .catch(err => console.log(err));
};
