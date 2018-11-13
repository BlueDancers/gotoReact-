// <App /> jsx语法需要Readct进行解析 所以这里需要引入react
import React from 'react';
import ReactDOM from 'react-dom';
// css也可以引入
import './index.css';
// import App from './TodoList/index';
// import App from './react-component/App';
// import App from './TodoLists/index';
import App from './react-redux/reactRedux';
import { Provider } from 'react-redux';
import store from './react-redux/store';

const Todo = (
  <Provider store={store}>
    <App/>
  </Provider>
);

// 程序入口
ReactDOM.render(Todo, document.getElementById('root'));
