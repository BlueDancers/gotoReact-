import React, { Component,Fragment } from 'react'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './App.css'
export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      list: []
    }
    this.handleToogle = this.handleToogle.bind(this)
  }
  render() {
    return (
      <Fragment>
         <button onClick={this.handleToogle}>
          切换
        </button>
        <TransitionGroup>
        {
          this.state.list.map((item, index) => {
            return(
              <CSSTransition 
                key={index}
                timeout={1000} // 持续时间 1000毫秒
                classNames='fade' // 定义动画的名称
                unmountOnExit // 消失的时候将dom也删除了
                onEnter={(el) => { // js的动画表现形式
                el.style.color = 'blue'
                }}
                appear={true} // 第一次进入也会执行动画
                >
              <div >{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
      </Fragment>
    )
  }
  handleToogle () {
    this.setState(((prevState)=>{
      return {
        list:[...prevState.list,'item']
      }
    }))
  }
}
