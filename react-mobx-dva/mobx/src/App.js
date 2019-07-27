import React, { Component } from 'react';
import mobx from './mobx';
// import logo from './logo.svg';
import './App.css';
class Bar extends Component {
  render() {
    const queue = this.props.queue;
    return (
      <div className="App">
        <span>{queue.length}</span>
      </div>
    );
  }
}

class Foo extends Component {
  render() {
    const cache = mobx.cache;
    return (
      <div>
        <Bar queue={cache.queue} />
      </div>
    );
  }
}

export default Foo;

// {/* <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div> */}
