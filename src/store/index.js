import { createStore, compose, applyMiddleware } from 'redux';

// REDUCERS
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

// REDUX-SAGA
import sagas from './sagas';

// REACTOTRON CONFIG for REDUX SAGA
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

// MIDDLEWARES
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware]; // To add new middlewares use middlewares.push()

// REACTOTRON CONFIG + CREATE STORE
const store = __DEV__
  ? createStore(
    reducers,
    compose(
      console.tron.createEnhancer(),
      applyMiddleware(...middlewares),
    ),
  )
  : createStore(reducers, compose(applyMiddleware(...middlewares)));

// ACTIVATE SAGA MIDDLEWARE
sagaMiddleware.run(sagas);

// EXPORT STORE
export default store;
