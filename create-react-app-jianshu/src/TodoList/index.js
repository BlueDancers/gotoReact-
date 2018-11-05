import React, { Component } from "react";
const Fragment = React.Fragment; // 类似小程序block容器的东西

export default class TodoList extends Component {

  constructor (props) { // 类的构造函数
    super(props)
    this.state = { //react的数据都是有状态进行来管理的
      inputValue: '',
      list: [
        '学习Vue',
        '学习React'
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.updateInput.bind(this)}/>
          <button onClick={this.Btnclick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((e, index) => {
              return <li key={index} onClick={this.deleteList.bind(this, index)}>{e}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
  updateInput (e) {
    console.log(this);
    
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  Btnclick () {
    let text = this.state.inputValue
    console.log(text);
    this.setState({
      list: [...this.state.list, text],
      inputValue: ''
    })
  }
  deleteList (index) {
    const list = [...this.state.list]
    // const list = this.state.list React不推荐我们对数据直接改变 所以更加推荐上面的写法
    list.splice(index,1)
    this.setState({
      list
    })
    console.log(index);
  }
}
