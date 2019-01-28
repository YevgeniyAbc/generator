import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import monitorReducersEnhancer from './enhancers/monitorReducers';
import rootReducer from './reducers';
import { watcherSaga } from "./sagas";

export default function configureStore(preloadedState) {

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  //create logger
  const logger = createLogger();

  //apply middlewares
  const middlewares = [logger, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  //compose enhancers
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  //create store
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  //hot reloading
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  //run the saga
  sagaMiddleware.run(watcherSaga);

  return store
}