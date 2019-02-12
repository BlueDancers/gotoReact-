import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'
import PriceList from '../components/PriceList'
import CreateBtn from '../components/CreateBtn'
import ViewTab from '../components/ViewTab'
import TotalPrice from '../components/TotalPrice'
import MonthPicker from '../components/MonthPicker'
import { List_View, Chart_View, TotalIncome, TotalOutcome,padLeft } from '../utility'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      TabView: List_View, // 初始tab
      selectYear: new Date().getFullYear(),
      selectMonth: new Date().getMonth() + 1,
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
    // 数据变更重新计算
    let totalIncome = 0
    let totalOutcome = 0
    const { TabView, priceList, selectYear, selectMonth } = this.state
    const itemsWithCategory = priceList.filter(item => {
      if (selectMonth === 0) { // 月份为0的情况下说明为仅仅选择了年份 直接不进行过滤
        return item.date.includes(`${selectYear}`)
      } else {
        return item.date.includes(`${selectYear}-${padLeft(selectMonth)}`)
      }
      
    })
    itemsWithCategory.forEach(item => {
      if (item.category.type === TotalOutcome) {
        totalOutcome += item.price
      } else if (item.category.type === TotalIncome) {
        totalIncome += item.price
      }
    })
    return (
      <div className="App">
        <div className="header-conatiners">
          <div className="row App-header">
            <img className="App-logo" src={logo} alt="" />
          </div>
          <div className="row">
            <div className="col">
              <MonthPicker
                year={selectYear}
                month={selectMonth}
                changeYear={this.changeYear}
                changeMonth={this.changeMonth}
              />
            </div>
            <div className="col py-3 px-3">
              <TotalPrice income={totalIncome} outcome={totalOutcome} />
            </div>
          </div>
        </div>
        <CreateBtn onClick={this.BtnClick} />
        <ViewTab activeTab={TabView} onTabChange={this.onTabChange} />
        {TabView === List_View && (
          <Fragment>
            {itemsWithCategory.length ? (
              <PriceList
                items={itemsWithCategory}
                onModifyItem={this.onModifyItem}
                onDeleteItem={this.onDeleteItem}
              />
            ) : (
              <p>没有数据</p>
            )}
          </Fragment>
        )}
        {TabView === Chart_View && <h1>图标模式</h1>}
      </div>
    )
  }
  // 修改
  onModifyItem = id => {
    console.log(id)
  }
  // 删除
  onDeleteItem = id => {
    let priceList = this.state.priceList.filter(item => id !== item.id)
    this.setState({
      priceList
    })
  }
  // 切换头部菜单
  onTabChange = TabView => {
    this.setState({
      TabView
    })
  }
  // 选择年份
  changeYear = selectYear => {
    this.setState({
      selectYear,
      selectMonth: 0
    })
  }
  // 选择月份
  changeMonth = selectMonth => {
    this.setState({
      selectMonth
    })
  }
  // 点击新建按钮
  BtnClick = e => {
    const newItem = {
      id: 3,
      title: '发工资了',
      date: '2018-09-11',
      price: 1000,
      category: {
        id: 3,
        name: '工资',
        type: 'income',
        iconName: 'ios-plane'
      }
    }
    let priceList = [...this.state.priceList, newItem]
    this.setState({
      priceList
    })
  }
}

export default App
