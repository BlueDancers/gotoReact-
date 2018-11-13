// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : compose; // 来自于 redux
// const enhancer = composeEnhancers(
//   applyMiddleware(thunk)
//   // other store enhancers if any
// );
// export default createStore(
//   reducer /* 构建初始数据 */,
//   enhancer // 对中间件进行注册
// );


import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose; // 来自于 redux
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

export default createStore(
  reducer /* 构建初始数据 */,
  enhancer // 对中间件进行注册
);

sagaMiddleware.run(sagas)