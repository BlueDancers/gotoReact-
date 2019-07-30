import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoItem from './components/todoItem';
// import propTypes from 'prop-types';

@inject('todo')
@observer
class App extends Component {
  // static propTypes = {};
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }
  render() {
    const { todo } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="todo_list">
        <div className="header">
          <input
            value={inputValue}
            onChange={this.handchange}
            onKeyDown={this.submit}
            type="text"
          />
        </div>
        <div className="main">
          <div>当前未完成的数量为 {todo.left}</div>
          <div>
            {todo.todo.map(e => (
              <div key={e.id}>
                <TodoItem todo={e} />
              </div>
            ))}
          </div>
        </div>
        <div className="other" />
      </div>
    );
  }
  submit = e => {
    if (e.keyCode === 13) {
      this.props.todo.createTodo(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };
  handchange = e => {
    var inputValue = e.target.value;
    this.setState({ inputValue });
  };
}
export default App;
