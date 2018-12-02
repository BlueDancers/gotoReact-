import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import actionCreators from './store/actionCreators'

import { HomeWrapper, HomeLeft, HomeRigth, BackTop } from './style'
class Home extends PureComponent {
  componentDidMount() {
    this.props.changHomeData()
    this.bindEvent()
  }
  componentWillUnmount () {
    this.removebindEvent()
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
  // 组件销毁 一定要将绑定事件销毁
  removebindEvent() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4577/353c8d29771d3c5c0bfbe92556fb65da78d3f3da.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRigth>
          <Recommend />
          <Writer />
        </HomeRigth>
        {this.props.showScroll ? (
          <BackTop onClick={this.handScrollTop}>
            {this.props.showScroll}
          </BackTop>
        ) : (
          ''
        )}
      </HomeWrapper>
    )
  }
  handScrollTop = () => {
    window.scrollTo(0, 0)
  }
}
const mapState = state => {
  return {
    showScroll: state.home.get('showScroll')
  }
}

const mapDispatch = dispatch => {
  return {
    changHomeData() {
      const action = actionCreators.gethomeData()
      dispatch(action)
    },
    changeScrollTopShow() {
      //document.documentElement.scrollTop 获取记录屏幕最上方距离的事件
      // console.log(document.documentElement.scrollTop)
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop > 600) {
        // 显示
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        // 隐藏
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Home)
