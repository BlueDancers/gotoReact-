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
  title: state.detail.get('title'),
  content: state.detail.get('content')
})
const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(
  mapState,
  mapDispatch
)(withRouter(Detail))
