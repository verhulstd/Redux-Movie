import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from '../reducers/index';

export const store = createStore(
  combineReducers(reducer),
  applyMiddleware(thunk, logger)
);
