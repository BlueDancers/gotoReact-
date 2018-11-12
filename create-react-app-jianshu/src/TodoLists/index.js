import React, { Component } from "react";
import "antd/dist/antd.css";
import Todolistui from "./components/todolistUI";
import store from "../store/index";
import actionCreators from "../store/actionCreators";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.updateInputChange = this.updateInputChange.bind(this);
    this.handStorechange = this.handStorechange.bind(this);
    this.bindclick = this.bindclick.bind(this);
    this.deleteList = this.deleteList.bind(this)
    store.subscribe(this.handStorechange); // 订阅state的改变
  }

  render() {
    return <Todolistui
      inputValue={this.state.inputValue}
      list={this.state.list}
      updateInputChange={this.updateInputChange}
      bindclick={this.bindclick}
      deleteList={this.deleteList}
    />;
  }

  componentDidMount () {
    let action = actionCreators.getTodoList()
    store.dispatch(action)
  }

  updateInputChange(e) {
    const action = actionCreators.getInputChangeAction(e.target.value);
    store.dispatch(action); // 当发送给store的时候 action会被自动执行
  }
  
  handStorechange() {
    this.setState(store.getState());
  }
  
  bindclick() {
    const action = actionCreators.getAddItemAction();
    store.dispatch(action);
  }
  
  deleteList(index) {
    const action = actionCreators.getDeleteListAction(index);
    store.dispatch(action);
  }
}
