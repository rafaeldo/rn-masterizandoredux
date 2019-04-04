import { createStore, compose } from 'redux';

import loginReducer from './reducers/login';

// REACTOTRON CONFIG
const store = __DEV__
  ? createStore(loginReducer, compose(console.tron.createEnhancer()))
  : createStore;

export default store;
