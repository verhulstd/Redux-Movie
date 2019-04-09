import { searchFormReducer } from './searchFormReducer';
import { movieReducer } from './movieReducer';
import { filterReducer } from './filterReducer';

export const reducer = {
  search: searchFormReducer,
  movies: movieReducer,
  filter: filterReducer,
};
