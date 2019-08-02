import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject(todo => todo)
@observer
class Todoheader extends Component {
  state = { inputValue: '' };
  render() {
    return (
      <div className="header">
        <input
          value={this.state.inputValue}
          onChange={this.handchange}
          onKeyDown={this.submit}
          type="text"
          className="todo_list_text"
        />
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

export default Todoheader;
