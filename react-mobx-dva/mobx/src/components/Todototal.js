import React, { Component,Fragment } from 'react';
import { observer, inject } from 'mobx-react';

@inject(todo => todo)
@observer
class Todototal extends Component {
  render() {
    const { todo } = this.props;
    return (
      <Fragment>
        <div>当前未完成的数量为 {todo.left}</div>
        <div>当前已完成的数量 {todo.right}</div>
      </Fragment>
    );
  }
}

export default Todototal;
