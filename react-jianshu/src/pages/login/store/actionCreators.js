import axios from 'axios'
import { actionTypes } from './index'

function _changeLogin() {
  return {
    type: actionTypes.CHANGE_LOGIN_TRUE
  }
}

function changeLogin(username, password) {
  console.log(username,password);
  return dispatch => {
    axios.get('/login').then(res => {
      if (res.data.data) {
        dispatch(_changeLogin())
      }
    })
  }
}

function logout () {
  return {
    type: actionTypes.CHANGE_LOGIN_FALSE
  }
}
export default {
  changeLogin,
  logout
}
