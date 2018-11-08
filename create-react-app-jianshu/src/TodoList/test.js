import React, { Component } from "react";

export default class Text extends Component {

  componentWillReceiveProps () {
    console.log('子组件 componentWillReceiveProps','当组件从父组件接受了参数 只要父组件的render函数被重新执行 子组件的这个生命周期函数就会被执行 ');
  }
  componentWillUnmount () {
    console.log('子组件 componentWillUnmount  ', '即将被卸载的时候执行');
  }
  render() {
    console.log('子组件render函数执行');
    
    // return <div>{this.props.content}</div>;
    // jsx会被转化成为js代码,类似下面这个的对象 进行vdom渲染
    return React.createElement(
      "div",
      {},
      React.createElement("span", {}, this.props.content)
    );
  }
}
