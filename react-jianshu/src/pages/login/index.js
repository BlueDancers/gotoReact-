import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button } from './style'

import { actionCreators } from './store'
class Login extends Component {
  render() {
    const { loginStatus } = this.props
    if (loginStatus) {
      return <Redirect to='/'></Redirect>
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            {/* 教程上使用了ref 我觉得onChange时间也可以 */}
            <Input
              placeholder="账号"
              onChange={e => {
                this.account = e.target.value
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={input => {
                console.log(input)
                this.password = input
              }}
            />
            <Button
              onClick={() => {
                this.props.login(this.account, this.password)
              }}
            >
              登录
            </Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}

const mapState = state => ({
  loginStatus: state.login.get('login')
})
const mapDispatch = dispatch => ({
  login(account, passwordEle) {
    console.log(account, passwordEle.value)
    dispatch(actionCreators.changeLogin(account, passwordEle.value))
  }
})

export default connect(
  mapState,
  mapDispatch
)(Login)
