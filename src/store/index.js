import { createStore, compose } from 'redux';

import todosReducer from './reducers/todos';

// REACTOTRON CONFIG
const store = __DEV__
  ? createStore(todosReducer, compose(console.tron.createEnhancer()))
  : createStore;

export default store;
