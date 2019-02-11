import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { padLeft, range } from '../utility'
export default class MonthPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true,
      selectYear: this.props.year,
      selectMonth: this.props.month
    }
  }
  render() {
    const { year, month } = this.props
    const { isOpen, selectYear, selectMonth } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map(number => number + year)
    // 这个实现思路很棒 通过一个函数获取从-4开始的9位数 再迭代相加现在的年份 就会得到当前年份 的上下4年的数组
    return (
      <div className="dropdown month-picker-component">
        <h4>选择月份</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          style={{ position: 'relative' }}
          onClick={this.toggleisOpen}
        >
          {`${selectYear}年/${padLeft(selectMonth)}月`}
          {isOpen && (
            <div
              className="dropdown-menu"
              style={{ display: 'block', fontSize: '16px', width: '230px' }}
            >
              <div className="row">
                <div className="col border-right">
                  {yearRange.map((yearNumber, index) => (
                    <span
                      onClick={e => {
                        this.changeYear(e,yearNumber)
                      }}
                      className={
                        yearNumber === selectYear
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                      key={index}
                    >
                      {yearNumber}年
                    </span>
                  ))}
                </div>
                <div className="col">
                  {monthRange.map((monthNumber, index) => (
                    <span
                      onClick={(e) => {
                        this.changeMonth(e,monthNumber)
                      }}
                      className={
                        monthNumber === selectMonth
                          ? 'dropdown-item active'
                          : 'dropdown-item'
                      }
                      key={index}
                    >
                      {padLeft(monthNumber)}月
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
    )
  }
  toggleisOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  changeYear = (e,selectYear) => {
    e.stopPropagation();
    this.setState({
      selectYear,
      selectMonth: 0
    })
  }
  changeMonth = (e,selectMonth) => {
    e.stopPropagation();
    this.setState({
      selectMonth,
      isOpen: !this.state.isOpen
    })
  }
}
