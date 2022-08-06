import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import charactersReducer from './Characters/CharactersReducer';

const rootReducer = combineReducers({
  characters: charactersReducer,
});

const middleware = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleware);

export default store;