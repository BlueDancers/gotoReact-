import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  render() {
    let { login } = this.props
    if (login) {
      return <div>1</div>
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = state => ({
  login: state.login.get('login')
})

export default connect(
  mapState,
  null
)(Write)
