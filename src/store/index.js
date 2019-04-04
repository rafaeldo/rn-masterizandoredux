import { createStore, compose } from 'redux';

import reducers from './reducers';

// REACTOTRON CONFIG
const store = __DEV__
  ? createStore(reducers, compose(console.tron.createEnhancer()))
  : createStore(reducers);

export default store;
