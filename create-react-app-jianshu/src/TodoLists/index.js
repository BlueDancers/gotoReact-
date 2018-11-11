import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from '../store/index'
import actionCreators from '../store/actionCreators';
export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    console.log(this.state);
    this.updateInputChange = this.updateInputChange.bind(this)
    this.handStorechange = this.handStorechange.bind(this)
    this.bindclick = this.bindclick.bind(this)
    store.subscribe(this.handStorechange) // 订阅state的改变
    
  }
  render() {
    return (
      <div style={{ display: 'flex',justifyContent: 'center',flexWrap: 'wrap',marginTop:10}}>
        <div>
          <Input
            placeholder="todo Input"
            style={{ width: 225, marginRight: 10 }}
            value={this.state.inputValue}
            onChange={this.updateInputChange}
          />
          <Button type="primary" onClick={this.bindclick}>提交</Button>
        </div>
        <List
          style={{ width: 300, marginTop: 10 }}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item onClick={this.deleteList.bind(this,index)}>{item}</List.Item>}
        />
      </div>
    );
  }
  updateInputChange(e) {
    const action = actionCreators.getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handStorechange () {
    this.setState(
      store.getState()
    ) 
  }
  bindclick () {
    const action = actionCreators.getAddItemAction()
    store.dispatch(action)
  }
  deleteList (index) {
    const action = actionCreators.getDeleteListAction(index)
    store.dispatch(action)
  }
}
