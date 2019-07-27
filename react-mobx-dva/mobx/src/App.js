import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('todo')
@observer
class App extends Component {
  render() {
    return <div> {this.props.todo.todo} </div>;
  }
}
export default App;
