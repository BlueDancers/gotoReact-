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
