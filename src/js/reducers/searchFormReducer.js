import { SET_SEARCH } from '../actions/types';
import { searchFormState } from '../store/searchFormState';

export const searchFormReducer = (state = searchFormState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
