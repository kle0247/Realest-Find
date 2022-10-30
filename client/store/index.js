import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const reducer = combineReducers({
    auth
});

const store = configureStore({reducer: reducer }, applyMiddleware(thunk, logger));

export default store;
export * from './auth'