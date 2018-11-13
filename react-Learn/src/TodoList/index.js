import Test from "./test";
import React, { Component } from "react";
const Fragment = React.Fragment; // 类似小程序block容器的东西

export default class TodoList extends Component {
  constructor(props) {
    super(props); // 这里为什么
    this.state = {
      //react的数据都是有状态进行来管理的
      inputValue: "",
      list: ["学习Vue", "学习React"]
    };
  }
  componentWillMount() {
    console.log("componentWillMount  ", "即将被挂载到页面的时候执行");
  }
  componentDidMount() {
    console.log("componentDidMount  ", "被挂载完毕之后执行");
  }
  shouldComponentUpdate() {
    //shouldComponentUpdate?? 组件需要被更新吗?
    console.log(
      "shouldComponentUpdate  ",
      "你的组件需要被更新吗? 我返回true,我需要被更新"
    );
    // if () {

    // }
    return true;
  }
  componentWillUpdate() {
    console.log(
      "componentWillUpdate  ",
      "组件被更新之前会自动执行,但是在 shouldComponentUpdate 之后执行 如果 shouldComponentUpdate 返回false 将不会被执行"
    );
  }
  componentDidUpdate() {
    console.log("componentDidUpdate  ", "组件已经更新完成");
  }

  render() {
    console.log("render  执行");

    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.updateInput.bind(this)}
            ref={input => {
              this.input = input;
              // 当ref属性是回调函数时，函数接收底层DOM元素或类实例（取决于元素的类型）作为其参数
              // 这里的this.input 为render的this下面 那么可以获取到render的this方法都可以获取到ref的内容
              // res属于操作dom 一般情况下不推荐使用 使用e.target 数据流进行获取dom
              // 这里的this指向当前的render函数,所以 在render函数里面的方法都可以访问到
            }}
          />
          <button onClick={this.Btnclick.bind(this)}>提交</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((e, index) => {
            return (
              <li key={index} onClick={this.deleteList.bind(this, index)}>
                {e}
              </li>
            );
          })}
        </ul>
        {/* 这里有一个优化的问题,因为父组件的render函数执行 会带着子组件进行很多无意义的渲染,这里可以使用shouldComponentUpdate进行优化 */}
        <Test content={this.state.inputValue} />
      </Fragment>
    );
  }
  updateInput(e) {
    // console.log(e.target);
    // console.log(this.input);
    // console.log(this.ul.querySelectorAll("li").length);

    this.setState({
      inputValue: e.target.value
    });
  }
  Btnclick() {
    let text = this.state.inputValue;
    // console.log(text);
    this.setState(
      {
        list: [...this.state.list, text],
        inputValue: ""
      },
      () => {
        // setstate的异步回调
        console.log(this.ul.querySelectorAll("li").length); //这里会在setSate之前执行 因为setState是异步函数
      }
    );
  }
  deleteList(index) {
    const list = [...this.state.list];
    // const list = this.state.list React不推荐我们对数据直接改变 所以更加推荐上面的写法
    list.splice(index, 1);
    this.setState({
      list
    });
    console.log(index);
  }
}
