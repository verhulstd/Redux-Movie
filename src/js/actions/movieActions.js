import axios from 'axios';
import { FETCH_MOVIES } from './types';

export const fetchMovies = str => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=e066762a&s=${str}`)
    .then(res => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data.Search,
      });
    })
    .catch(err => console.log(err));
};
