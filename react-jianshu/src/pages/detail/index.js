import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import actionCreators from './store/actionCreators'

import { HomeWrapper, Header, Content } from './style'

class Detail extends Component {
  componentDidMount() {
    console.log(this.props)
    let { id } = this.props.match.params
    console.log(this.props)

    this.props.getDetail(id)
  }
  render() {
    let { title, content } = this.props
    return (
      <HomeWrapper>
        <Header>{title}</Header>
        {/* 相当于Vue 的 v-html */}
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </HomeWrapper>
    )
  }
}

  const mapState = state => ({
    title: state.detail.get('title'), //  immutable数据 获取state树中的detail分支下的title
    content: state.detail.get('content')
  })
  const mapDispatch = dispatch => ({
    getDetail(id) { // 视图中触发该方法 方法内部触发dispatch 获取由actionCreators生成的action,交给reducer
      dispatch(actionCreators.getDetail(id))
    }
  })

  export default connect(
    mapState,
    mapDispatch
  )(withRouter(Detail))
