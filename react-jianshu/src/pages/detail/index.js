import React, { Component } from 'react'
import { connect } from 'react-redux'

import { HomeWrapper, Header, Content } from './style'

class Detail extends Component {
  render() {
    let { title, content } = this.props
    return (
      <HomeWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </HomeWrapper>
    )
  }
}

const mapState = state => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

export default connect(
  mapState,
  null
)(Detail)
