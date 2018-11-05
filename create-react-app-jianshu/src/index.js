// <App /> jsx语法需要Readct进行解析 所以这里需要引入react
import React from 'react';
import ReactDOM from 'react-dom';
// css也可以引入
import './index.css';
import TodoList from './TodoList/index';
// 使用pwd的时候会使用这个
import * as serviceWorker from './serviceWorker';
// 程序入口
ReactDOM.render(<TodoList />, document.getElementById('root'));
serviceWorker.unregister();
