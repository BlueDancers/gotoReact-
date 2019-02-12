import React, { Component } from 'react'
import { padLeft, range } from '../utility'
export default class MonthPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      yearRange: []
    }
  }
  componentDidMount() {
    this.updateYearRange()
  }
  render() {
    const { year, month, changeYear, changeMonth } = this.props
    const { yearRange } = this.state
    const { isOpen } = this.state
    const monthRange = range(12, 1)
    // 这个实现思路很棒 通过一个函数获取从-4开始的9位数 再迭代相加现在的年份 就会得到当前年份 的上下4年的数组
    return (
      <div className="dropdown month-picker-component px-3">
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          style={{ position: 'relative', fontSize: '16px' }}
          onClick={this.toggleisOpen}
        >
          {`${year}年/${padLeft(month)}月`}
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
                        this.changeYear(e)
                        changeYear(yearNumber)
                      }}
                      className={
                        yearNumber === year
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
                      onClick={e => {
                        this.changeMonth(e)
                        changeMonth(monthNumber)
                      }}
                      className={
                        monthNumber === month
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
  // 更新年份数据
  updateYearRange = () => {
    this.setState({
      yearRange:range(9, -4).map(number => number + this.props.year)
    })
  }
  // 切换显示/隐藏
  toggleisOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    // 切换显示隐藏都会重新渲染数据
    this.updateYearRange()
  }
  // 年份回调
  changeYear = e => {
    e.stopPropagation()
  }
  // 月份回调
  changeMonth = e => {
    e.stopPropagation()
    this.toggleisOpen()
  }
}
