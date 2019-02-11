import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/PriceList'
import ViewTab from './components/ViewTab'
import TotalPrice from './components/TotalPrice'
import MonthPicker from './components/MonthPicker'
import { List_View } from './utility'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ViewTab: List_View, // 初始tab
      selectYear: 2019,
      selectMonth: 2,
      priceList: [
        {
          id: 1,
          title: '云南旅游',
          date: '2018-09-10',
          price: 400,
          category: {
            id: 1,
            name: '旅行',
            type: 'outcome',
            iconName: 'ios-plane'
          }
        },
        {
          id: 2,
          title: '朋友吃饭',
          date: '2018-09-11',
          price: 1000,
          category: {
            id: 2,
            name: '吃饭',
            type: 'outcome',
            iconName: 'ios-plane'
          }
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <MonthPicker
            year={this.state.selectYear}
            month={this.state.selectMonth}
          />
          <TotalPrice income={1000} outcome={1000} />
        </div>
        <ViewTab
          activeTab={this.state.ViewTab}
          onTabChange={this.onTabChange}
        />
        <PriceList
          items={this.state.priceList}
          onModifyItem={this.onModifyItem}
          onDeleteItem={this.onDeleteItem}
        />
      </div>
    )
  }
  // 修改
  onModifyItem = id => {
    console.log(id)
  }
  // 删除
  onDeleteItem = id => {
    console.log(id)
  }
  // 切换头部菜单
  onTabChange = ViewTab => {
    this.setState({
      ViewTab
    })
  }
}

export default App
