import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import greeting from './greeting/greetings';

const reducer = combineReducers({,
  greetingReducer
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;
