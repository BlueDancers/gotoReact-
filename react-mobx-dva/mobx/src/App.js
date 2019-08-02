import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { trace } from 'mobx';
import Todoheader from './components/Todoheader';
import Todototal from './components/Todototal';
import TodoItem from './components/todoItem';
// import propTypes from 'prop-types';

@inject(todo => todo)
@observer
class App extends Component {
  render() {
    trace();
    const { todo } = this.props;
    return (
      <div className="todo_list">
        <Todoheader />
        <div className="main">
          <Todototal />
          <div>
            {todo.todo.map(e => (
              // 需要明白一点那就是数据发生变化的时候,render函数一定会重新渲染的
              // 但是我们可以控制render函数渲染的地方,也就是说,将render函数渲染的部分组件化可以减小重新渲染的性能损耗
              <div className="todo_item_con" key={e.id}>
                <TodoItem item={e} />
                <span
                  className="delete"
                  onClick={todo.deleteTodo.bind(this, e.id)}
                >
                  删除
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="other" />
      </div>
    );
  }
}
export default App;
