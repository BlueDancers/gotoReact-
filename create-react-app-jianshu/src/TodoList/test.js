import React, { Component } from "react";

export default class Text extends Component {
  render() {
    // return <div>{this.props.content}</div>;
    // jsx会被转化成为js代码,类似下面这个的对象 进行vdom渲染
    return React.createElement(
      "div",
      {},
      React.createElement("span", {}, this.props.content)
    );
  }
}
