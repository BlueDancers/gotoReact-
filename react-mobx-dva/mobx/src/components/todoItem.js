import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { trace } from 'mobx';

@inject(todo => todo)
@observer
class Todoitem extends Component {
  render() {
    trace()
    const { todo, item } = this.props;
    return (
      <div className="todo_item">
        <input
          type="checkbox"
          className="toggle"
          checked={item.finished}
          onChange={todo.changeStatus.bind(this, item.id)}
        />
        <span className={['title', item.finished ? 'finished' : ''].join(' ')}>
          {item.title}
        </span>
      </div>
    );
  }
}

export default Todoitem;
