import React, { Component } from "react";


export default class Text extends Component {

  shouldComponentUpdate (nextProps,nextState) { // 接下来props/state变化成什么样
    // 对比变化的props里面的值与当前的是否一样 不一样再去更新组件 一样 就不去渲染组件
    if (nextProps.content !== this.props.content){
      return true
    } else {
      return false
    }
  }

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
